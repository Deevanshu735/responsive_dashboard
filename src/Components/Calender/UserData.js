// import React, { useState, useEffect } from "react";
// import "./UserData.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import { app } from "../../firebase";
// import {
//   doc,
//   getDoc,
//   getFirestore,
// } from "firebase/firestore";
// import { Container, Row, Col, Card } from "react-bootstrap";
// const db = getFirestore(app);

// function UserData() {
//   const cardstyle = {

//     borderRadius: "5px",
//     border: "none",
//     height: "60px",
//     overflow: "hidden",
//     boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
//     fontSize: "1rem",
//   };

//   const [userData, setUserData] = useState({ Name: "", status: "" });
//   const userId = "UHsZ0thvb9hrN7P3sUZf";

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userRef = doc(db, 'faculty', userId); // Change "John Doe" to the user's unique identifier (e.g., userId or name)
//         const userDoc = await getDoc(userRef);

//         if (userDoc.exists()) {
//           setUserData(userDoc.data()); // Assuming user document contains name, sheet, and status
//         } else {
//           console.log("No such user document found!");
//         }
//       } catch (error) {
//         console.error("Error fetching user data: ", error);
//       }
//     };

//     fetchUserData();
//   }, []); // Empty dependency array to run the effect only once after component mounts

//   return (
//     <>
//       <Container className="p-0 m-0" fluid>
//         <Card className="m-0 p-0" style={cardstyle}>
//           <Row className="align-items-center ">
//             {/* User Name Section */}
//             <Col xs={12} md={4} >
//               <p className="usertext">{userData.Name || "Loading..."}</p>
//             </Col>

//             {/* Export Sheet Section */}
//             <Col xs={12} md={4} >
//               <Card className="sheet">
//                 <Row className="align-items-center">
//                   <Col xs="auto">
//                     <FontAwesomeIcon icon={faDownload} style={{ color: "#006EBE" }} />
//                   </Col>
//                   <Col>
//                     <p>{userData.Name ? `Export ${userData.Name} Sheet` : "Export Sheet"}</p>
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>

//             {/* Status Section */}
//             <Col xs={12} md={4}>
//               <p style={{ color: "#006EBE" }}>
//                 Status:<span style={{ color: "black" }}>{userData.status ? userData.status : "Loading..."}</span>
//               </p>
//             </Col>
//           </Row>
//         </Card>
//       </Container>

//     </>
//   );
// }

// export default UserData;

import React, { useState, useEffect } from "react";
import "./UserData.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { app } from "../../firebase";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { Container, Row, Col, Card } from "react-bootstrap";

const db = getFirestore(app);

function UserData() {
  const cardstyle = {
    borderRadius: "5px",
    border: "none",
    height: "60px",
    overflow: "hidden",
    boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
    fontSize: "1rem",
  };

  const [userData, setUserData] = useState({ Name: "", status: "" });
  const userId = "UHsZ0thvb9hrN7P3sUZf";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = doc(db, 'faculty', userId);
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
        <Row className="align-items-center " style={{ height: "100vh" }}>
          {/* User Name Section */}
          <Col xs={12} md={4} className="text-center">
            <p className="usertext m-0">{userData.Name || "Loading..."}</p>
          </Col>

          {/* Export Sheet Section */}
          <Col xs={12} md={4} className="text-center">
            <Card className="sheet py-2">
              <Row xs={12} lg={12} md={12} sm={12} className="align-items-center">
                <Col lg={2} >
                  <FontAwesomeIcon icon={faDownload} style={{ color: "#006EBE" }} />
                </Col>
                <Col lg={10}>
                  <p className="m-0">{userData.Name ? `Export ${userData.Name} Sheet` : "Export Sheet"}</p>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Status Section */}
          <Col xs={12} md={4} className="text-center">
            <p style={{ color: "#006EBE", margin: "0px" }}>
              Status: <span style={{ color: "black" }}>{userData.status || "Loading..."}</span>
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default UserData;

