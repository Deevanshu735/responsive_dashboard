import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import image from "./userImage.png";
import { app } from "../../firebase";
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';

function Navbar() {
  const cardstyle = {
    marginTop: "2px",
    borderRadius: "5px",
    border: "none",
    height: "60px",
    overflow: "hidden",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    display: "flex",
    fontSize: "1rem",
    alignItems: "center",
  };

  const [name, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState(null);

  const fetchUsername = async () => {
    try {
      const db = getFirestore(app);
      const docRef = doc(db, "faculty", "Pr3XnIy8GB4ynS4NBpHN"); // Specify the document ID here
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setUsername(data.Name);
        setDob(data.DOB);
      } else {
        console.log("No attendance data found for this user.");
      }
    } catch (error) {
      console.error("Error fetching attendance data: ", error);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchUsername();
  }, []);


  return (
    <Container className="sticky-header cardstyle" style={cardstyle} fluid>
      <Container fluid>
        <div className="scroll-container">
          <h5 style={{ margin: "0px", color: "#191970" }}>Happy Birthday</h5>
          <h5 style={{ margin: "0px", color: "#191970" }}> {name ? `${dob} ${name}` : 'Loading...'}</h5>
        </div>
      </Container>
      <span className="d-flex gap-3 me-2">
        <div className="naviconsty">
          <FontAwesomeIcon icon={faBell} style={{ color: "black" }} />
        </div>
        <div className="naviconstyl">
          <Image className="iconi" src={image} roundedCircle />
        </div>
      </span>
    </Container>

  );
}

export default Navbar;
