import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import iconimag from "../assest/images/usericon.png";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { app } from "../../firebase";
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import "../styles/main.css";

export default function Navbar() {
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
    <>
      <Container className="sticky-header cardstyle" style={cardstyle} fluid>
        <Container fluid>
          <div className="scroll-container">
            <h5 style={{ margin: "0px", color: "#191970" }}>Happy Birthday</h5>
            <h5 style={{ margin: "0px", color: "#191970" }}> {name ? `${dob} ${name}` : 'Loading...'}</h5>
          </div>
        </Container>
        <span className="d-flex gap-2 me-2">
          <div className="naviconstyle">
            <FaBell style={{ color: "white" }} />
          </div>
          <div className="naviconstyle2">
            <Image className="iconimgs" src={iconimag} roundedCircle />
          </div>
          {/* Display error if fetching fails */}
          {error && <p className="error-message">{error}</p>}


        </span>
      </Container>
    </>
  );
}
