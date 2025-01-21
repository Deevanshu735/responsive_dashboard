import React from "react";
import { Row, Col, Card, Container, Image } from "react-bootstrap";
import flutter from "../assest/images/flutter2.png";
import react from "../assest/images/react1.png";
import "../styles/main.css"

export default function Position() {
  return (
    <Container className="p-0 m-0" fluid>
      <Row className="m-0 gap-2" xs={12} lg={12} sm={12} md={12}>
        <Card className="position-card"
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            background: "#E6F5FF",
            height: "140px",
            border: "none",
          }}
        >
          <Row className="mt-1" xs={12} lg={12} sm={12} md={12}>
            <Col
              style={{ height: "55px", padding: "0px" }}
              lg={2}
              sm={2}
              md={2}
              xs={3}
            >
              {" "}
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={flutter}
              />
            </Col>
            <Col
              style={{
                alignContent: "center",
                fontSize: " clamp(17px, 2vw, 20px)",
                padding: "0px",
              }}
              lg={5}
              sm={5}
              md={7}
              xs={9}
            >
              <p style={{ fontWeight: "400" }} className="m-0">
                Flutter Developer
              </p>
            </Col>
            <Col className="view-job-col"
              style={{ alignContent: "center", padding: "0px", float: "right" }}
              lg={5}
              sm={5}
              md={3}
              xs={12}
            >
              <p
                style={{
                  fontWeight: "400",
                  color: "rgba(0, 110, 190, 1)",
                  textDecoration: "underline",
                  fontSize: " clamp(13px, 1.5vw, 16px)",
                  margin: "0px",
                }}
              >
                View Job Description
              </p>
            </Col>
          </Row>
          <Row className="m-0 p-0 p-lg-2 " xs={12} lg={12} sm={12} md={12}>
            <div className="fontsize4">
              <span className="job">Experienced required : </span>
              <span className="job2">1-3 years</span>
            </div>
            <span className="fontsize4">
              <span className="job">
                Job Description :
                <span className="job2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </span>{" "}
              </span>{" "}
            </span>
          </Row>
        </Card>

        <Card className="position-card"
          style={{
            background: "#FFEFF1",
            overflowY: "scroll",
            scrollbarWidth: "none",
            height: "140px",
            border: "none",
          }}
        >
          <Row className="mt-1" xs={12} lg={12} sm={12} md={12}>
            <Col
              style={{ height: "55px", padding: "0px" }}
              lg={2}
              sm={2}
              md={2}
              xs={3}
            >
              {" "}
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={react}
              />
            </Col>
            <Col
              style={{
                alignContent: "center",
                fontSize: " clamp(17px, 2vw, 20px)",
                padding: "0px",
              }}
              lg={5}
              sm={5}
              md={7}
              xs={9}
            >
              <p style={{ fontWeight: "400" }} className="m-0">
                React Native Developer
              </p>
            </Col>
            <Col
              style={{ alignContent: "center", padding: "0px", float: "right" }}
              lg={5}
              sm={5}
              md={3}
              xs={12}
            >
              <p
                style={{
                  fontWeight: "400",
                  color: "rgba(0, 110, 190, 1)",
                  textDecoration: "underline",
                  fontSize: " clamp(13px, 1.5vw, 16px)",
                  margin: "0px",
                }}
              >
                View Job Description
              </p>
            </Col>
          </Row>
          <Row className="m-0 p-0 p-lg-2 " xs={12} lg={12} sm={12} md={12}>
            <span className="fontsize4">
              <span className="job">Experienced required : </span>
              <span className="job2">1-3 years</span>
            </span>
            <br />
            <span className="fontsize4">
              {" "}
              <span className="job">Job Description : </span>{" "}
              <span className="job2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
            </span>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
