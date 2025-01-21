import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebase"; // Importing 'app' from firebaseConfig.js
import { Container, Row, Col, Card } from "react-bootstrap";

function UserInternalData() {
  const card1 = {
    boxShadow:
      " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    border: "none",
    color: "black",
    fontSize: "clamp(12px,1vw,15px)",
    padding: "10px",
    margin: "12px 0px 0px 0px",
    height: "120px",
    justifyContent: "space-around",
    borderRadius: "10px",
  };

  // State to store employee data
  const [employeeData, setEmployeeData] = useState({
    Name: "",
    EmployeeID: "",
    workingHours: "00.00",
    breakHours: "00.00",
    totalWorkingHours: "0",
    differenceFrom8Hrs: "00:00",
  });

  useEffect(() => {
    // Function to fetch employee data from Firestore
    const fetchEmployeeData = async () => {
      const db = getFirestore(app); // Using 'app' initialized in firebaseConfig.js
      const docRef = doc(db, "faculty", "UHsZ0thvb9hrN7P3sUZf"); // Replace "employeeID" with the actual document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setEmployeeData({
          Name: data.Name || "N/A",
          EmployeeID: data.EmployeeID || "N/A",
          workingHours: data.workingHours || "00.00",
          breakHours: data.breakHours || "00.00",
          totalWorkingHours: data.totalWorkingHours || "0",
          differenceFrom8Hrs: data.differenceFrom8Hrs || "00:00",
        });
      } else {
        console.log("No such document!");
      }
    };

    fetchEmployeeData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <Container className="m-0 p-0" fluid>
      <Row xs={12} sm={12} md={12} lg={12}>
        <Col md={4} xs={12} lg={4} sm={12}>
          <Card sm={4} style={card1}>
            <Row xs={12} sm={12} md={12} lg={12}>
              {" "}
            </Row>
            <Row lg={12}>
              <Col>
                <span style={{ fontWeight: "400", fontSize: "15px" }}>
                  Name of the Employee :-{" "}
                  <span
                    style={{
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#585858",
                    }}
                  >
                    {employeeData.Name}
                  </span>
                </span>{" "}
                <br />
                <span>
                  Employee ID:-{" "}
                  <span
                    style={{
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#585858",
                    }}
                  >
                    {employeeData.EmployeeID}
                  </span>
                </span>
              </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
              {" "}
            </Row>
          </Card>
        </Col>
        <Col md={4} xs={12} lg={4} sm={12}>
          <Card sm={4} style={card1}>
            <Row xs={12} sm={12} md={12} lg={12}>
              {" "}
            </Row>
            <Row lg={12}>
              <Col>
                <span>
                  Working Hours :-{" "}
                  <span
                    style={{
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#585858",
                    }}
                  >
                    {employeeData.workingHours}
                  </span>
                </span>{" "}
                <br />
                <span>
                  Break Hours :-{" "}
                  <span
                    style={{
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#585858",
                    }}
                  >
                    {employeeData.breakHours}
                  </span>
                </span>
              </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
              {" "}
            </Row>
          </Card>
        </Col>
        <Col md={4} xs={12} lg={4} sm={12}>
          <Card sm={4} style={card1}>
            <Row xs={12} sm={12} md={12} lg={12}>
              {" "}
            </Row>
            <Row lg={12}>
              <Col>
                <span>
                  Total Working Hrs in this month :-{" "}
                  <span
                    style={{
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#585858",
                    }}
                  >
                    {employeeData.totalWorkingHours}
                  </span>
                </span>{" "}
                <br />
                <span>
                  Difference from 8 Hrs :-{" "}
                  <span
                    style={{
                      fontWeight: "300",
                      fontSize: "15px",
                      color: "#585858",
                    }}
                  >
                    {employeeData.differenceFrom8Hrs}
                  </span>{" "}
                </span>
              </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12}>
              {" "}
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserInternalData;
