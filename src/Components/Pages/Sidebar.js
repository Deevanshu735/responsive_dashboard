import { useState } from "react";
import { Container, Row, Col, Nav, Offcanvas, Navbar } from "react-bootstrap";
import {
  MdDashboard,
  MdFormatListNumbered,
  MdCoPresent,
  MdFolderShared,
  MdLogout,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbListDetails } from "react-icons/tb";
import { PiFloppyDisk } from "react-icons/pi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiFloppyDisk } from "react-icons/ci";
import { LuFileStack } from "react-icons/lu";
import {
  FaUser,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Employeelist from "./Employeelist";
import Dashboard from "./Dashboard";
import "../styles/main.css";
import { Button, Card, Image } from "react-bootstrap";
import React from "react";
import OurBlogs from "./OurBlogs";
import CalenderPage from "../Calender/CalenderPage";
import imglogo from "../assest/images/atslogo.png";

export default function Sidebar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [show, setShow] = useState(false);

  // main offcanvas
  const [isopen, setIsopen] = useState("false");
  const toggle = () => setIsopen(!isopen);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navoffcavas = {
    boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "5px",
    margin: "5px",
    backgroundColor: "#f8f9fa",
  };

  const msidebartext = {
    display: isopen ? "flex" : "none",
  };

  const msidebarfont = {
    fontSize: isopen ? "1.2rem" : " 1.7rem",
    alignItems: "center",
    fontWeight: isopen ? "normal" : "normal",
    marginLeft: isopen ? "10px" : "15px",
  };

  const mlogo = {
    fontSize: isopen ? "1.1rem" : " 1.rem",
    alignItems: "center",
    fontWeight: isopen ? "normal" : "normal",
    marginLeft: "0px",
    cursor: "pointer",
  };
  const toggleicon = {
    color: isopen ? "#0363e8" : "#2C3539",
  };

  const menuItems = [
    { section: "dashboard", label: "Dashboard", icon: <MdDashboard /> },
    {
      section: "employeelist",
      label: "Employee List",
      icon: <MdFormatListNumbered />,
    },
    {
      section: "devteamattendence",
      label: "Dev Team Attendance",
      icon: <MdCoPresent />,
    },
    {
      section: "salesteamattendence",
      label: "Sales Team Attendance",
      icon: <MdCoPresent />,
    },
    { section: "leaves", label: "Leaves", icon: <PiFloppyDisk /> },
    {
      section: "employeeverification",
      label: "Employee Verification",
      icon: <MdFolderShared />,
    },
    {
      section: "monthlycalendar",
      label: "Monthly Calendar",
      icon: <SlCalender />,
    },
    {
      section: "yearlycalender",
      label: "Yearly Calendar",
      icon: <SlCalender />,
    },
    {
      section: "companypolicy",
      label: "Company Policy",
      icon: <TbListDetails />,
    },
    { section: "howtouse", label: "How To Use", icon: <PiFloppyDisk /> },
    {
      section: "ourblogs",
      label: "Our Blogs",
      icon: <PiFloppyDisk />,
      hr: <hr style={{ border: "1px solid #0513FD" }} />,
    },
    {
      section: "offerletter",
      label: "Offer Letter",
      icon: <SlEnvolopeLetter />,
    },
    {
      section: "salarycalculation",
      label: "Salary Calculation",
      icon: <GiTakeMyMoney />,
    },
    {
      section: "monthlysalarysheet",
      label: "Monthly Salary Sheet",
      icon: <GiTakeMyMoney />,
    },
    {
      section: "logout",
      label: "Logout",
      icon: <MdLogout />,
      hr: <hr style={{ border: "1px solid #0513FD" }} />,
      className: "log",
    },
    { section: "hrcandidate", label: "HR-Candidate-Data", icon: <FaUser /> },
    { section: "prejoineelist", label: "Pre-Joinee-List", icon: <FaUser /> },
    {
      section: "prejoineecredentials",
      label: "Pre-Joinee-Credentials",
      icon: <FaUser />,
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "employeelist":
        return <Employeelist />;
      case "ourblogs":
        return <OurBlogs />;
      case "monthlycalendar":
        return <CalenderPage />;
      case "logout":
        navigate("/");
        return null;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Container fluid>
      <Row xs={12} sm={12} lg={12} md={12}>
        {/* Sidebar Navigation */}
        {/*  for small screens */}
        <Col className="d-block d-md-none p-0 m-0 ">
          <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Image className="logostyle" src={imglogo} />
            </Offcanvas.Header>
            <Nav className="flex-column mt-4 offsidebar">
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Nav.Link
                    style={item.style}
                    className={`list-item ${item.className || ""}`}
                    onClick={() => {
                      setActiveSection(item.section); // First function
                      handleClose(); // Second function
                    }}
                  >
                    {item.icon}{" "}
                    <span style={{ marginLeft: "0.5rem" }}>{item.label}</span>
                  </Nav.Link>
                  {item.hr}
                </React.Fragment>
              ))}
              <Nav.Link className="my-3">
                <Row className="gap-1 text-center" xs={12}>
                  <Col xs={2} className="fontstyle">
                    <div
                      style={{ backgroundColor: "#4267B2" }}
                      className="sidebaricon"
                    >
                      <FaFacebook color="white" />
                    </div>
                  </Col>
                  <Col xs={2} className="fontstyle">
                    <div
                      style={{ backgroundColor: "#0a66c2" }}
                      className="sidebaricon"
                    >
                      <FaLinkedinIn color="white" />
                    </div>
                  </Col>
                  <Col xs={2} className="fontstyle">
                    <div
                      style={{ backgroundColor: "#FF0000" }}
                      className="sidebaricon"
                    >
                      <FaYoutube color="white" />
                    </div>
                  </Col>
                  <Col xs={2} className="fontstyle">
                    <div
                      style={{
                        backgroundImage:
                          "linear-gradient(to right,#f9ce34,#ee2a7b, #6228d7)",
                      }}
                      className="sidebaricon"
                    >
                      <FaInstagram color="white" />
                    </div>
                  </Col>
                </Row>
              </Nav.Link>
            </Nav>
          </Offcanvas>

          {/* Offcanvas Toggle Button */}
          <Navbar className="d-block d-md-none p-0 m-0">
            <Card style={navoffcavas} className=" d-block w-100">
              <Row xs={12}>
                <Col xs={9}>
                  <Nav.Link className="logostyle">LOGO</Nav.Link>
                </Col>
                <Col xs={3}>
                  <Button
                    className="m-1"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Menu
                  </Button>
                </Col>
              </Row>
            </Card>
          </Navbar>
        </Col>

        {/* Main Sidebar for Medium and Large screens */}
        <Col
          xs={12}
          sm={12}
          md={isopen ? 2 : 1}
          lg={isopen ? 2 : 1}
          className=" d-none d-md-block p-0 m-0 "
        >
          <Row xs={12} lg={12} md={12} sm={12}>
            <Col
              md={isopen ? 8 : 0}
              lg={isopen ? 9 : 0}
              sm={isopen ? 9 : 0}
              xs={isopen ? 9 : 0}
            >
              <h3
                style={{
                  ...msidebartext,
                  color: "#0363e8",
                  justifyContent: "center",
                  margin: "5px",
                  display: isopen ? "flex" : "none",
                }}
                className="logostle "
              >
                LOGO
              </h3>
            </Col>
            <Col lg={isopen ? 3 : 9} sm={isopen ? 3 : 0} xs={isopen ? 4 : 9}>
              <span style={toggleicon} className="m-1 fs-4">
                <FaArrowLeft onClick={toggle} />
              </span>
            </Col>
          </Row>

          <Nav className=" flex-column mt-3 sidebar">
            <Nav.Link
              className="list-item "
              onClick={() => setActiveSection("dashboard")}
            >
              <MdDashboard
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}>Dashboard</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("employeelist")}
            >
              <MdFormatListNumbered
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}>Employee List</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("devteamattendence")}
            >
              <MdCoPresent
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}>Dev Team Attendance</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("salesteamattendence")}
            >
              <MdCoPresent
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}>Sales Team Attendance</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("salesteamattendence")}
            >
              <CiFloppyDisk
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Leaves</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("employeeverification")}
            >
              <MdFolderShared
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Employee Verification</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("monthlycalendar")}
            >
              <SlCalender
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Monthly Calendar</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("yearlycalender")}
            >
              <SlCalender
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Yearly Calendar</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("companypolicy")}
            >
              <TbListDetails
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Company Policy</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("howtouse")}
            >
              <PiFloppyDisk
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> How To Use</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("ourblogs")}
            >
              <LuFileStack
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Our Blogs</span>
            </Nav.Link>
            <hr style={{ border: "1px solid #0513FD" }} />
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("offerletter")}
            >
              <SlEnvolopeLetter
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Offer Letter</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("salarycalculation")}
            >
              <GiTakeMyMoney
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Salary Calculation</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("salarycalculation")}
            >
              <GiTakeMyMoney
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Monthly Salary Sheet</span>
            </Nav.Link>
            <Nav.Link className="log " onClick={() => setActiveSection("/")}>
              <MdLogout
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Logout</span>
            </Nav.Link>
            <hr style={{ border: "1px solid #0513FD" }} />
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("hrcandidate")}
            >
              <FaUser
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.4rem" }}
              />{" "}
              <span style={msidebartext}> HR-Candidate-Data</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("prejoineelist")}
            >
              <FaUser
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.5rem" }}
              />{" "}
              <span style={msidebartext}> Pre-Joinee-List</span>
            </Nav.Link>
            <Nav.Link
              className="list-item"
              onClick={() => setActiveSection("prejoineecredentials")}
            >
              <FaUser
                className="icon"
                style={{ ...msidebarfont, marginRight: "0.4rem" }}
              />{" "}
              <span style={msidebartext}> Pre-Joinee-Credentials</span>
            </Nav.Link>
            <Nav.Link className="my-3">
              <Row
                style={mlogo}
                className="gap-1"
                sm={12}
                md={12}
                lg={12}
                xs={12}
              >
                <Col
                  lg={isopen ? 2 : 12}
                  xs={isopen ? 2 : 12}
                  md={isopen ? 4 : 12}
                  className="fontstyle"
                >
                  <div
                    style={{ backgroundColor: "#4267B2" }}
                    className="sidebaricon"
                  >
                    <FaFacebook color="white" />
                  </div>
                </Col>
                <Col
                  lg={isopen ? 2 : 12}
                  xs={isopen ? 2 : 12}
                  md={isopen ? 4 : 12}
                  className="fontstyle"
                >
                  <div
                    style={{ backgroundColor: "#0a66c2" }}
                    className="sidebaricon"
                  >
                    <FaLinkedinIn color="white" />
                  </div>
                </Col>
                <Col
                  lg={isopen ? 2 : 12}
                  xs={isopen ? 2 : 12}
                  md={isopen ? 4 : 12}
                  className="fontstyle"
                >
                  <div
                    style={{ backgroundColor: "#FF0000" }}
                    className="sidebaricon"
                  >
                    <FaYoutube color="white" />
                  </div>
                </Col>
                <Col
                  lg={isopen ? 2 : 12}
                  xs={isopen ? 2 : 12}
                  md={isopen ? 4 : 12}
                  className="fontstyle"
                >
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to right,#f9ce34,#ee2a7b, #6228d7)",
                    }}
                    className="sidebaricon"
                  >
                    <FaInstagram color="white" />
                  </div>
                </Col>
              </Row>
            </Nav.Link>
          </Nav>
        </Col>

        {/* Main Content */}
        <Col
          style={{ backgroundColor: "#F4F7FA" }}
          className="renderContent"
          xs={12}
          sm={12}
          md={isopen ? 10 : 11}
          lg={isopen ? 10 : 11}
        >
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
}
