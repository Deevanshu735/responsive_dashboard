import React from "react";
import "../styles/OurBlogs.css";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import p1 from "../assest/images/p1.png";
import u2 from "../assest/images/u2.png";
import u3 from "../assest/images/u3.png";
import p6 from "../assest/images/p6.png";

export default function PublishBlogs() {
  // Array of objects for each card's content
  const cardData = [
    {
      image: p1,
      buttonTag: "Tag",
      buttonBlog: "Blog Tag",
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      readMoreText: "Read More",
    },
    {
      image: u2,
      buttonTag: "Lorem",
      buttonBlog: "Blog Tag",
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      readMoreText: "Read More",
    },
    {
      image: u3,
      buttonTag: "Dummy",
      buttonBlog: "Blog Tag",
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      readMoreText: "Read More",
    },
    {
      image: u2,
      buttonTag: "Learn",
      buttonBlog: "Blog Tag",
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      readMoreText: "Read More",
    },
    {
      image: u3,
      buttonTag: "Dummy",
      buttonBlog: "Blog Tag",
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      readMoreText: "Read More",
    },
    {
      image: p6,
      buttonTag: "Tag",
      buttonBlog: "Blog Tag",
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown. ",
      readMoreText: "Read More",
    },
  ];

  return (
    <Container fluid>
      <Row
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className="d-flex justify-content-around"
      >
        {cardData.map((card, index) => (
          <Col key={index} xs={12} lg={4} md={4} sm={6}>
            <Card className="card3">
              <Row>
                <Image className="imgstyle" src={card.image} />
              </Row>
              <Card className="card4">
                <div className="button2">
                  <div>{card.buttonTag}</div>
                  <div>{card.buttonBlog}</div>
                </div>
                <Row>
                  <p className="font1">{card.heading}</p>
                </Row>
                <Row>
                  <p className="font2">{card.font2Text}</p>
                </Row>
                <div style={{ justifyItems: "center" }}>
                  <Row className="readmore">
                    <button className="readtext">{card.readMoreText}</button>
                  </Row>
                </div>
              </Card>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
