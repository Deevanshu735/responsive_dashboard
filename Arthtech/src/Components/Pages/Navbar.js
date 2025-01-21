import React, { useEffect, useState } from "react";
import { LuBellDot } from "react-icons/lu";
import iconimag from "../assest/images/logo.jpeg";
import { RiSettingsLine } from "react-icons/ri";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { app } from "../../firebase";
import vector from "../assest/images/Vector.png"
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import "../styles/main.css";

export default function Navbar() {
  const cardstyle = {
    borderRadius: "5px",
    border: "none",
    height: "60px",
    overflow: "hidden",
    boxShadow:
      " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    display: "flex",
    alignItems: "center",
  };

  const [name, setUsername] = useState("");
  const [dob, setDob] = useState("");
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
      <Container
        className="sticky-header cardstyle mt-xs-0 mt-lg-2 mt-md-2"
        style={cardstyle}
        fluid
      >
        <span className="fs-2 m-3">
          <Image src={vector} />
        </span>
        <Container className="p-0 " fluid>
          <div className="scroll-container">
            <p style={{ margin: "0px", padding: "0px" }}>Happy Birthday</p>
            <p style={{ margin: "0px", padding: "0px" }}>
              {" "}
              {name ? `${dob} ${name}` : "Loading..."}
            </p>
          </div>
        </Container>
        <span className="d-flex gap-2 me-lg-5 me-1 ">
          <div className="naviconstyle">
            <RiSettingsLine />
          </div>
          <div className="naviconstyle">
            <LuBellDot />
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
