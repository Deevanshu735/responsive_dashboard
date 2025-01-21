import React from "react";
import { Container, Row, Card, Form } from "react-bootstrap";
import { useState } from "react";
import bItemImage from "../assest/images/img5.jpg";
import "../styles/OurBlogs.css";
import { Button, Col } from "react-bootstrap";

export default function Addblog() {
  const [avatar, setAvatar] = useState(null);

  const [heading, setheading] = useState(null);
  const [headingError, setheadingError] = useState(null);

  const [description, setdescription] = useState(null);
  const [descriptionError, setdescriptionError] = useState(null);

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleHeadingChange = (e) => {
    const value = e.target.value;
    setheading(value);
    if (value.length < 8) {
      setheadingError("Heading  must be at least 8 characters long");
    } else {
      setheadingError(null);
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setdescription(value);
    if (value.length < 20) {
      setdescriptionError("Description must be at least 20 characters long");
    } else {
      setdescriptionError(null);
    }
  };

  return (
    <Container className="mt-2" fluid>
      <Row xs={12} sm={12} md={12} lg={12}>
        <Card className="card5">
          <Form.Group controlId="avatar" className="w-25 mb-3">
            {/* Hidden File Input */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              {/* Hidden File Input */}
              <Form.Control
                className="d-none"
                type="file"
                value={avatar}
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                id="fileInput"
              />

              {/* Image */}
              <img
                src={bItemImage}
                alt="Upload Avatar"
                className="imgs"
                onClick={() => document.getElementById("fileInput").click()}
              />

              {/* Centered Text */}
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#0363e8",
                  fontWeight: "bold",
                  fontSize: "1.2vw",
                  backgroundColor: "transparent",
                }}
              >
                Blog Image
              </span>
            </div>
          </Form.Group>

          <Form.Group controlId="formName" className=" mb-3 ">
            <Form.Control
              className="custom-input "
              type="text"
              placeholder="Add Here Your Main Heading "
              required
              value={heading}
              onChange={handleHeadingChange}
            />
            <span className="text-danger">{headingError}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Write Your Post Description"
              required
              value={description}
              onChange={handleDescriptionChange}
              as="textarea"
              rows={8}
            />
            <span className="text-danger">{descriptionError}</span>
          </Form.Group>
          <Row>
            <Col></Col>
            <Col>
              <Button className="savebutton" variant="primary" type="submit">
                Save
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
