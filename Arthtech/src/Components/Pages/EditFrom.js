import { Container, Row, Card, Form } from "react-bootstrap";
import { useState } from "react";
import bItemImage from "../assest/images/img5.jpg";
import "../styles/OurBlogs.css";
import { Button, Col } from "react-bootstrap";
import JoditEditor from "jodit-react";
import { useRef } from "react";

export default function EditForm() {
  //  jodit editor
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    autofocus: true,
    minHeight: 180,
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "left",
      "right",
      "center",
      "justify",
      "|",
      "font",
      "fontsize",
      "|",
      "brush",
      "ul",
      "ol", // Buttons in the first row
      "\n", // Line break to move the next set of buttons to the second row
      "outdent",
      "indent",
      "paragraph",
      "|",
      "link",
      "print",
      "table",
      "|",
      "symbols",
      "image",
      "video",
      "|",
      "source",
      "find",
      "undo",
      "redo", // Buttons in the second row
    ],
  };

  // validation form
  const [avatar, setAvatar] = useState("");
  // const [heading, setheading] = useState("");
  // const [headingError, setheadingError] = useState("");

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  // const handleHeadingChange = (e) => {
  //   const value = e.target.value;
  //   setheading(value);
  //   if (value.length < 8) {
  //     setheadingError("Heading  must be at least 8 characters long");
  //   } else {
  //     setheadingError(null);
  //   }
  // };

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
              placeholder="Add here your Main heading "
              required
              // value={heading}
              // onClick={handleHeadingChange}
            />
            {/* <span className="text-danger">{headingError}</span> */}
          </Form.Group>
          <JoditEditor
            ref={editor}
            value={content} // The controlled content
            config={config} // Configuration options
            onClick={(newContent) => setContent(newContent)} // Updates state on change
          />
          <br />
          <Row>
            <Col></Col>
            <Col>
              <Button className="savebutton" variant="primary" type="submit">
                Update
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
