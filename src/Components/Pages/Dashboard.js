import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import img1 from "../assest/images/blog1.png";
import { Image } from "react-bootstrap";
import employee from "../assest/images/user4 2.png";
import attendence from "../assest/images/Group 45.png";
import user1 from "../assest/images/user1 1.png";
import "../styles/main.css";
import Navbar from "./Navbar";

export default function Dashboard() {
  const card1 = {
    backgroundImage: "linear-gradient(to right,#0363E8,#7DAFF3)",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    border: "none",
    color: "white",
    padding: "10px",
    margin: "12px 0px 0px 0px",
    height: "120px",
    justifyContent: "space-around",
    borderRadius: "10px",
  };

  const card2 = {
    backgroundImage: "linear-gradient(to right,#F66B2E ,#EFA55E )",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    color: "white",
    padding: "10px",
    border: "none",
    margin: "12px 0px 0px 0px",
    height: "120px",
    justifyContent: "space-around",
    borderRadius: "10px",
  };

  const card3 = {
    backgroundImage: "linear-gradient(to right,#039767 ,#49D5A8)",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    color: "white",
    padding: "10px",
    border: "none",
    margin: "12px 0px 0px 0px",
    height: "120px",
    justifyContent: "space-around",
    borderRadius: "10px",
  };

  const row2c = {
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#FFFFFF",
    margin: "25px 0px 20px 0px ",
    padding: "10px",
    height: "300px",
    overflowY: "auto",
    alignItems: "start",
    borderRadius: "10px",
  };

  const row2Table = {
    width: "100%",
    height: "100%",
    margin: "0px",
  };

  const row3c = {
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#FFFFFF",
    height: "310px",
    padding: "15px 0px",
    borderRadius: "10px",
    margin: "35px 0px 20px 0px",
  };

  const row3cardstyle = {
    borderRadius: "10px",
    border: "none",
    color: "white",
    backgroundColor: "#009EFB",
    padding: "7px",
    margin: "20px 0px ",
  };

  const iconstyle = {
    color: "white",
    fontSize: "2rem",
    margin: "8px",
  };

  const row4card1style = {
    borderRadius: "10px",
    border: "none",
    padding: "2px",
    color: "black",
    background: "#F3F6F9",
  };

  const row4cardstyle = {
    borderRadius: "10px",
    color: "black",
    margin: "7px 0px  ",
  };

  const row4card2style = {
    border: "1px solid white",
    borderRadius: "10px",
    padding: "5px",
  };

  const row4card3style = {
    borderRadius: "10px",
    padding: "5px",
    border: "none",
    color: "black",
    background: "#FFEEE7",
  };
  const row4c = {
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    margin: "20px 0px 20px 0px ",
    padding: "10px",
    height: "62%",
    overflowY: "auto",
    alignItems: "start",
    borderRadius: "10px",
  };
  const imgstyle = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    margin: "5px 5px 5px 0px ",
  };
  return (
    // Dashboard Navbar
    <Container style={{ margin: "0px", padding: "0px", height: "auto" }} fluid>
      <Navbar />
      {/* 3 card  */}
      <Container fluid>
        <Row xs={12} sm={12} md={12} lg={12}>
          <Col md={4} xs={12} lg={4} sm={12}>
            <Card sm={4} style={card1}>
              <Row xs={12} sm={12} md={12} lg={12}>
                {" "}
              </Row>
              <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={9} sm={9} lg={9} md={8}>
                  <h5>Employees</h5>
                  <h5>50/55</h5>
                </Col>
                <Col xs={3} sm={3} lg={3} md={4}>
                  <Image className="iconimgs" src={employee} roundedCircle />
                </Col>
              </Row>
              <Row xs={12} sm={12} md={12} lg={12}>
                {" "}
              </Row>
            </Card>
          </Col>
          <Col md={4} xs={12} lg={4} sm={12}>
            <Card sm={4} style={card2}>
              <Row xs={12} sm={12} md={12} lg={12}>
                {" "}
              </Row>
              <Row xs={12} sm={12} md={12} lg={12}>
                <Col xs={9} sm={9} lg={9} md={8}>
                  <h5>Employees</h5>
                  <h5>Attendance</h5>
                </Col>
                <Col xs={3} sm={3} lg={3} md={4}>
                  <Image className="iconimgs" src={attendence} roundedCircle />
                </Col>
              </Row>
              <Row xs={12} sm={12} md={12} lg={12}>
                {" "}
              </Row>
            </Card>
          </Col>
          <Col md={4} xs={12} lg={4} sm={12}>
            <Card sm={4} style={card3}>
              <Row xs={12} sm={12} md={12} lg={12}>
                {" "}
              </Row>
              <Row>
                <Col>
                  <h5>Check In</h5>
                  <h5>Check Out</h5>
                  <h5>Leaves</h5>
                </Col>
              </Row>
              <Row xs={12} sm={12} md={12} lg={12}>
                {" "}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Employee list */}
      <Row xs={12} lg={12} md={12} sm={12}>
        <Col xs={12} lg={7} md={7} sm={12}>
          <Row
            className="row2c"
            style={{
              width: "100%",
              overflowX: "hidden",
              boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
              margin: "20px 0px 20px 0px ",
              padding: "12px",
              height: "33%",
              backgroundColor: "#FFFFFF",
              alignItems: "start",
              borderRadius: "10px",
            }}
          >
            {" "}
            {/* Ensures row is full width and hides any horizontal overflow */}
            <Table className="tableinside" style={row2Table}>
              <thead style={{ margin: "0px" }}>
                <tr>
                  {" "}
                  <span className="mainh">Employee List </span>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Employee Id</td>
                  <td>Profile</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Tomy</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>Tomy</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td style={{ background: "#F3F6F9" }} colSpan={3}>
                    <a
                      className="fontsize3"
                      style={{
                        color: "blue",
                        textDecoration: "underline",
                        textAlign: "center",
                        display: "block",
                      }}
                      href="/"
                    >
                      View All Employees
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="row2c" style={row2c}></Row>

          {/* Open position */}
          <Row xs={12} className="gap-1 row2c" style={row2c}>
            <p className="mainh" style={{ margin: "0px" }}>
              Open Position
            </p>
            <Card
              xs={12}
              lg={12}
              md={12}
              sm={12}
              style={{
                overflowY: "scroll",
                scrollbarWidth: "none",
                background: "#E6F5FF",
                height: "124px",
                border: "none",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <Row xs={12} lg={12} md={12} sm={12}>
                    <Col xs={8} sm={6} lg={8}>
                      <span
                        style={{
                          padding: "8px",
                          borderRadius: "50%",
                          background: "#CCECFE ",
                          color: "#006EBE ",
                          textAlign: "center",
                        }}
                      >
                        FD
                      </span>
                      <span className="fontsize5"> Flutter Developer</span>
                    </Col>
                    <Col xs={4} sm={6} lg={4}>
                      <span>
                        <a
                          className="fontsize9"
                          style={{
                            color: "blue",
                            textDecoration: "underline",
                            textAlign: "right",
                          }}
                          href="/"
                        >
                          View Details
                        </a>
                      </span>
                    </Col>
                  </Row>
                </Card.Title>
                <span>
                  <span className="fontsize4">
                    <span className="job">Experienced required : </span>{" "}
                  </span>
                  <span className="fontsize2">1-3 years</span>
                </span>
                <br />
                <span>
                  <span className="fontsize4">
                    {" "}
                    <span className="job">Job Description : </span>
                  </span>
                  <span className="fontsize2">
                    lorem ipsum dolor sit amet hpiuweefw wkdjcbiww wdkjbwiwn
                    wkjbiw wdjvbwi wdkjcbwec hjwbcw{" "}
                  </span>
                </span>
              </Card.Body>
            </Card>
            <Card
              xs={12}
              lg={12}
              md={12}
              sm={12}
              style={{
                background: "#FFEFF1",
                overflowY: "scroll",
                scrollbarWidth: "none",
                height: "124px",
                border: "none",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <Row xs={12} lg={12} md={12} sm={12}>
                    <Col xs={8} sm={6} lg={8}>
                      {" "}
                      <span
                        style={{
                          color: " #FC697E",
                          borderRadius: "50%",
                          background: " #FEDFE3",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        FD
                      </span>
                      <span className="fontsize5"> React Native developer</span>
                    </Col>
                    <Col xs={4} sm={6} lg={4}>
                      <span>
                        <a
                          className="fontsize9"
                          style={{
                            color: "blue",
                            textDecoration: "underline",
                            textAlign: "center",
                          }}
                          href="/"
                        >
                          View Details
                        </a>
                      </span>
                    </Col>
                  </Row>
                </Card.Title>

                <span className="fontsize4">
                  <span className="job">Experienced required : </span>{" "}
                </span>
                <span className="fontsize2">1-3 years</span>
                <br />

                <span className="fontsize4">
                  {" "}
                  <span className="job">Job Description : </span>
                </span>
                <span className="fontsize2">lorem ipsum dolor sit amet,</span>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        {/* upcoming holidays  */}
        <Col xs={12} sm={12} md={5} lg={5}>
          <Row style={row3c}>
            <Row xs={12} lg={12}>
              <Col xs={9} lg={9}>
                {" "}
                <h5 className="mainh" style={{ margin: "0px" }}>
                  Upcoming Holidays
                </h5>
              </Col>
              <Col className="mr-0 p-0" xs={3} lg={3}>
                <span>
                  <a
                    className="fontsize3"
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      textAlign: "center",
                    }}
                    href="/"
                  >
                    View All
                  </a>
                </span>
              </Col>
            </Row>
            <div>
              <Card style={row3cardstyle}>
                <Row xs={12} md={12} lg={12} sm={12}>
                  <Col xs={3} sm={2} lg={2} md={3}>
                    {" "}
                    <SlCalender style={iconstyle} />
                  </Col>
                  <Col xs={9} sm={10} lg={10} md={9}>
                    {" "}
                    <span className="fontsize3">Diwali </span>
                    <br />
                    <span className="fontsize2">31 Nov 2024</span>
                  </Col>
                </Row>
              </Card>
              <Card style={row3cardstyle}>
                <Row xs={12} md={12} lg={12} sm={12}>
                  <Col xs={3} sm={2} lg={2} md={3}>
                    {" "}
                    <SlCalender style={iconstyle} />
                  </Col>
                  <Col xs={9} sm={10} lg={10} md={9}>
                    {" "}
                    <span>Diwali </span>
                    <br />
                    <span className="fontsize2">31Nov 2024</span>
                  </Col>
                </Row>
              </Card>
              <Card style={row3cardstyle}>
                <Row xs={12} md={12} lg={12} sm={12}>
                  <Col xs={3} sm={2} lg={2} md={3}>
                    {" "}
                    <SlCalender style={iconstyle} />
                  </Col>
                  <Col xs={9} sm={10} lg={10} md={9}>
                    {" "}
                    <span>Diwali </span>
                    <br />
                    <span className="fontsize2">31Nov 2024</span>
                  </Col>
                </Row>
              </Card>
            </div>
          </Row>

          {/* new Joiner Candidate  */}
          <Row className="row4c" style={row4c}>
            <Row className="my-1" xs={12} lg={12}>
              <Col xs={9} lg={9}>
                {" "}
                <h5 className="mainh" style={{ margin: "0px" }}>
                  New Joiner Candidate
                </h5>
              </Col>
              <Col className="mr-0 p-0" xs={3} lg={3}>
                <span>
                  <a
                    style={{
                      marginRight: "0px",
                      color: "blue",
                      textDecoration: "underline",
                      textAlign: "center",
                    }}
                    href="/"
                  >
                    View All
                  </a>
                </span>
              </Col>
            </Row>
            <Card style={{ border: "none" }}>
              <Row className="newjoiner">
                <Card className="row4card1" style={row4card1style}>
                  <Row xs={12} md={12} lg={12} sm={12}>
                    <Col xs={3} sm={2} lg={2} md={3}>
                      {" "}
                      <Image className="iconimgs" src={user1} roundedCircle />
                    </Col>
                    <Col
                      style={{ alignContent: " center" }}
                      xs={9}
                      sm={10}
                      lg={10}
                      md={9}
                    >
                      {" "}
                      <span className="fontsize3">Dianna russel </span>
                      <br />
                      <span className="fontsize2">ID-ATS 28384982</span>
                    </Col>
                  </Row>
                </Card>

                {/* our recent  blogs  */}
                <Card style={row4card2style}>
                  <Row xs={12} md={12} lg={12} sm={12}>
                    <Col xs={3} sm={2} lg={2} md={3}>
                      {" "}
                      <Image
                        className="iconimgs"
                        src={employee}
                        roundedCircle
                      />
                    </Col>
                    <Col
                      style={{ alignContent: " center" }}
                      xs={9}
                      sm={3}
                      md={9}
                      lg={10}
                    >
                      {" "}
                      <span className="fontsize3">Lorem Ipsum </span>
                      <br />
                      <span className="fontsize2">ID-ATS 838429</span>
                    </Col>
                  </Row>
                </Card>
                <Card style={row4card3style}>
                  <Row xs={12} md={12} lg={12} sm={12}>
                    <Col xs={3} sm={2} lg={2} md={3}>
                      {" "}
                      <Image className="iconimgs" src={user1} roundedCircle />
                    </Col>
                    <Col
                      style={{ alignContent: " center" }}
                      className="text-align-center"
                      xs={9}
                      sm={10}
                      lg={10}
                      md={9}
                    >
                      {" "}
                      <span className="fontsize3">Russel Dianna </span>
                      <br />
                      <span className="fontsize2">ID-ATS 739439</span>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Card>

            <hr style={{ margin: "30px 0px", border: "1px dotted black" }} />
            {/* our recent blogs */}
            <Row className="my-1" xs={12} lg={12}>
              <Col xs={9} lg={9}>
                {" "}
                <h5 className="mainh" style={{ margin: "0px" }}>
                  Our Recent Blogs
                </h5>
              </Col>
              <Col className="mr-0 p-0" xs={3} lg={3}>
                <span>
                  <a
                    className="link "
                    style={{
                      marginRight: "0px",
                      color: "blue",
                      textDecoration: "underline",
                      textAlign: "center",
                    }}
                    href="/"
                  >
                    View All
                  </a>
                </span>
              </Col>
            </Row>
            <Row className="gap-2 m-0 p-0">
              <Card style={row4cardstyle}>
                <Row xs={12} md={12} lg={12} sm={12}>
                  <Col xs={3} sm={2} lg={2} md={3}>
                    {" "}
                    <Image style={imgstyle} src={img1} square />
                  </Col>
                  <Col
                    style={{ alignContent: " center" }}
                    xs={9}
                    sm={10}
                    lg={10}
                    md={9}
                  >
                    <span className="fontsize6">
                      Your Success,Our Commitment Arthtech Supports Post
                      Delivery Supports
                    </span>
                  </Col>
                </Row>
              </Card>
              <Card style={row4cardstyle}>
                <Row xs={12} md={12} lg={12} sm={12}>
                  <Col xs={3} sm={2} lg={2} md={3}>
                    {" "}
                    <Image style={imgstyle} src={img1} square />
                  </Col>
                  <Col
                    style={{ alignContent: " center" }}
                    xs={9}
                    sm={10}
                    lg={10}
                    md={9}
                  >
                    {" "}
                    <span className="fontsize6">
                      {" "}
                      Your Success,Our Commitment Arthtech Supports Post
                      Delivery Supports
                    </span>
                  </Col>
                </Row>
              </Card>
              <Card style={row4cardstyle}>
                <Row xs={12} md={12} lg={12} sm={12}>
                  <Col xs={3} sm={2} lg={2} md={3}>
                    {" "}
                    <Image style={imgstyle} src={img1} square />
                  </Col>
                  <Col
                    style={{ alignContent: " center" }}
                    xs={9}
                    sm={10}
                    lg={10}
                    md={9}
                  >
                    <span className="fontsize6">
                      Your Success,Our Commitment Arthtech Supports Post
                      Delivery Supports
                    </span>
                  </Col>
                </Row>
              </Card>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
