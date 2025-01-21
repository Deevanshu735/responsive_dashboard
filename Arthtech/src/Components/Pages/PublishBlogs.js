import React from "react";
import "../styles/OurBlogs.css";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import im from "../assest/images/table1.png";
import { useState } from "react";

export default function PublishBlogs() {
  const [isActive, setIsActive] = useState("true");

  const toggleButton = () => {
    setIsActive(!isActive); // Toggle the state
  };

  // Array of objects for each card's content
  const cardData = [
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      date: "28/11/2045",
    },
  ];

  return (
    <Container fluid>
      <Row xs={12} sm={12} md={12} lg={12}>
        <Card className="card3">
          <Row xs={12} lg={12} md={12} sm={12}>
            <Col xs={12} lg={11} md={11} sm={12}>
              {cardData.map((card, index) => (
                <Row xs={12} lg={12} md={12} sm={12}>
                  <Card className="card4">
                    <Row xs={12} lg={12} md={12} sm={12}>
                      <Col xs={11} lg={2} md={2} sm={11}>
                        <Image className="imgstyle" src={card.image} />
                      </Col>
                      <Col xs={12} lg={10} md={10} sm={12}>
                        <Row xs={12} lg={12} md={12} sm={12}>
                          <Col xs={12} lg={9} md={9} sm={12}>
                            <p className="font1">{card.heading}</p>
                          </Col>
                          <Col xs={12} lg={3} md={3} sm={12}>
                            <button className="button2" onClick={toggleButton}>
                              {isActive ? "Active" : "Deactive"}
                            </button>
                          </Col>
                        </Row>
                        <Row xs={12} lg={12} md={12} sm={12}>
                          <Col xs={12} lg={10} md={10} sm={12}>
                            <p className="font2">{card.font2Text}</p>
                            <p className="font2">{card.date}</p>
                          </Col>
                          <Col></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card>
                </Row>
              ))}
            </Col>
            <Col xs={2} lg={1} md={1} sm={12}></Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
