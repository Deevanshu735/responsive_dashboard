import React, { useState, useEffect } from "react";
import "./UserData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { app } from "../../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Container, Row, Col, Card } from "react-bootstrap";

const db = getFirestore(app);

function UserData() {
  const cardstyle = {
    borderRadius: "5px",
    border: "none",
    height: "60px",
    overflow: "hidden",
    boxShadow:
      " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    fontSize: "1rem",
  };

  const [userData, setUserData] = useState({ Name: "", status: "" });
  const userId = "UHsZ0thvb9hrN7P3sUZf";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = doc(db, "faculty", userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("No such user document found!");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Container fluid className="p-0 m-0 mt-2">
      <Card className="m-0 p-0 " style={cardstyle}>
        <Row
          xs={12}
          lg={12}
          md={12}
          sm={12}
          className="align-items-center "
          style={{ height: "100vh" }}
        >
          {/* User Name Section */}
          <Col xs={3} md={4} className="text-center">
            <p className="usertext m-0">{userData.Name || "Loading..."}</p>
          </Col>

          {/* Export Sheet Section */}
          <Col xs={6} md={4}>
            {/* <Card className="sheet py-1">
              <Row
                xs={12}
                lg={12}
                md={12}
                sm={12}
                className="align-items-center"
              >
                <Col className="p-0" lg={4} xs={3}>
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{ color: "#006EBE" }}
                  />
                </Col>
                <Col className="p-0" lg={8} xs={9}>
                  <p className="m-0 usertext">
                    {userData.Name
                      ? `Export ${userData.Name} Sheet`
                      : "Export Sheet"}
                  </p>
                </Col>
              </Row>
            </Card> */}
            <Card className="sheet d-flex align-items-center py-2">
              <Row xs={12} lg={12} md={12} sm={12}>
                <Col lg={2} xs={2}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faDownload}
                    style={{
                      color: "#006EBE",
                      fontSize: "1.2rem",
                      marginRight: "0.5rem",
                    }}
                  />
                </Col>
                <Col lg={10} xs={10}>
                  {" "}
                  <p className="m-0 usertext">
                    {userData.Name
                      ? `Export ${userData.Name} sheet`
                      : "Export sheet"}
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Status Section */}
          <Col xs={3} md={4} className="text-center usertext">
            <p style={{ color: "#006EBE", margin: "0px" }}>
              Status:{" "}
              <span style={{ color: "black" }}>
                {userData.status || "Loading..."}
              </span>
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default UserData;
