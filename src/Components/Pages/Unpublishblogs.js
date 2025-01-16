import React, { useState } from "react";
import "../styles/OurBlogs.css";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import im from "../assest/images/table1.png";
import Addblog from "./Addblog";
import EditForm from "./EditFrom";

export default function UnpublishBlogs() {
  const cardData = [
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.",
      date: "28/11/2045",
    },
    {
      image: im,
      heading: "Lorem ipsum dummy netx dummy aara",
      font2Text:
        "Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.Lorem ipsum is simply a dummy text of the printing and etting industry .Lorem ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown.",
      date: "28/11/2045",
    },
  ];

  const [showAddBlog, setShowAddBlog] = useState(false); // For Addblog component
  const [showEditForm, setShowEditForm] = useState(false); // For EditForm component
  const [editingCard, setEditingCard] = useState(null); // To store the card being edited

  // Handle clicking "Edit"
  const handleEditClick = (card) => {
    setEditingCard(card); // Set the card to be edited
    setShowEditForm(true); // Show the EditForm component
  };

  // Handle clicking FAB (Add button)
  const handleFabClick = () => {
    setShowAddBlog(true); // Show the Addblog component
    setShowEditForm(false); // Hide the EditForm component if it's currently shown
  };

  return (
    <>
      {/* Show Addblog or EditForm depending on the state */}
      {showAddBlog ? (
        <Addblog onClose={() => setShowAddBlog(false)} /> // Close Addblog when done
      ) : showEditForm ? (
        <EditForm card={editingCard} onClose={() => setShowEditForm(false)} /> // Close EditForm when done
      ) : (
        <Container fluid>
          <Row xs={12} sm={12} md={12} lg={12}>
            <Card className="card3">
              <Row xs={12} lg={12} md={12} sm={12}>
                <Col xs={12} lg={11} md={11} sm={12}>
                  {cardData.map((card, index) => (
                    <Row xs={12} lg={12} md={12} sm={12} key={index}>
                      <Card className="card4">
                        <Row xs={12} lg={12} md={12} sm={12}>
                          <Col xs={11} lg={2} md={2} sm={11}>
                            <Image className="imgstyle" src={card.image} />
                          </Col>
                          <Col xs={12} lg={10} md={10} sm={12}>
                            <Row xs={12} lg={12} md={12} sm={12}>
                              <Col xs={12} lg={8} md={8} sm={12}>
                                <p className="font1">{card.heading}</p>
                              </Col>
                              <Col xs={12} lg={4} md={4} sm={12}>
                                <button className="button3">Publish</button>
                                <button
                                  className="button4"
                                  onClick={() => handleEditClick(card)}
                                >
                                  Edit
                                </button>
                              </Col>
                            </Row>
                            <Row xs={12} lg={12} md={12} sm={12}>
                              <Col xs={12} lg={10} md={10} sm={12}>
                                <p className="font2">{card.font2Text}</p>
                                <p className="font2">{card.date}</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Card>
                    </Row>
                  ))}
                </Col>
                {/* FAB button to open Addblog */}
                <Fab onClick={handleFabClick} className="fab">
                  <AddIcon className="addicon" />
                </Fab>
              </Row>
            </Card>
          </Row>
        </Container>
      )}
    </>
  );
}
