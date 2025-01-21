import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { Card } from "react-bootstrap";
import "../styles/OurBlogs.css";
import { useState } from "react";
import Unpublishblogs from "./Unpublishblogs";
import PublishBlogs from "./PublishBlogs";
import { Row, Col } from "react-bootstrap";

export default function OurBlogs() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container className="p-0" fluid>
        <Navbar />
        <Card className="card1">
          <p className="heading">Welcome Our Website Blogs</p>
          <span className="center-container">
            <div className="toggle-container">
              <button
                className={`toggle-btn ${!show ? "active" : ""}`}
                onClick={() => setShow(false)}
              >
                Unpublish Blogs
              </button>
              <button
                className={`toggle-btn ${show ? "active" : ""}`}
                onClick={() => setShow(true)}
              >
                Publish Blogs
              </button>
            </div>
          </span>
        </Card>
        <Row>
          <Col>
            {/* Blogs  */}
            <div>{show ? <PublishBlogs /> : <Unpublishblogs />}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
