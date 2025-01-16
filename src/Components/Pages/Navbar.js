import React from "react";
import { FaBell } from "react-icons/fa";
import iconimag from "../assest/images/usericon.png";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
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
  return (
    <>
      <Container className="sticky-header cardstyle" style={cardstyle} fluid>
        <Container fluid>
          <div className="scroll-container">
            <h5 style={{ margin: "0px", color: "#191970" }}>Happy Birthday</h5>
            <h5 style={{ margin: "0px", color: "#191970" }}>9 November</h5>
          </div>
        </Container>
        <span className="d-flex gap-2 me-2">
          <div className="naviconstyle">
            <FaBell style={{ color: "white" }} />
          </div>
          <div className="naviconstyle2">
            <Image className="iconimgs" src={iconimag} roundedCircle />
          </div>
        </span>
      </Container>
    </>
  );
}
