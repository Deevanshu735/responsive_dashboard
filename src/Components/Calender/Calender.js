// import React, { useEffect, useState } from 'react';
// import './Calender.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { Container, Row, Col, Button } from 'react-bootstrap';

// function Calender() {
//     const [currentDate, setcurrentDate] = useState(new Date());
//     const [daysInMonth, setDaysInMonth] = useState([]);
//     const [startDay, setStartDay] = useState(0);
//     const [selectedDay, setSelectedDay] = useState(null);

//     useEffect(() => {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();
//         const date = new Date(year, month, 1);
//         const days = [];

//         while (date.getMonth() === month) {
//             days.push(new Date(date));
//             date.setDate(date.getDate() + 1);
//         }

//         setDaysInMonth(days);
//         setStartDay(new Date(year, month, 1).getDay());
//     }, [currentDate]);

//     const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     const preMonth = () => {
//         setcurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
//     }

//     const nextMonth = () => {
//         setcurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
//     }

//     return (
//         <Container className='calender'>
//             <Row className='header align-items-center' style={{ padding: "22px" }}>
//                 <Col xs={4} className='text-left'>
//                     <Button variant="link" onClick={preMonth} style={{ height: "30px", width: "30px", border: "1px solid #006EBE", borderRadius: "5px" }}>
//                         <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#006EBE", width: "16.17px", height: "17px" }} />
//                     </Button>
//                     <Button variant="primary" onClick={nextMonth} style={{ marginLeft: "12px", border: "none", backgroundColor: "#006EBE", height: "30px", width: "30px", borderRadius: "5px" }}>
//                         <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FFFFFF", width: "16.17px", height: "17px" }} />
//                     </Button>
//                 </Col>
//                 <Col xs={4} className='text-center'>
//                     <span style={{ width: "173px", height: "27px", fontWeight: "400", fontSize: "22px", lineHeight: "27.29px" }}>
//                         {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}

//                     </span>
//                 </Col>
//                 <Col xs={4} className='text-right' style={{ width: "80px", height: "37px", backgroundColor: "#006EBE", padding: "9px 18px", color: "white", borderRadius: "5px" }}>
//                     <p style={{ width: "43px", height: "19px", fontWeight: "400", fontSize: "15px", lineHeight: "" }}>Today</p>
//                 </Col>
//             </Row>

//             <Row className='days-name' style={{ color: "white" }}>
//                 {dayNames.map((day) => (
//                     <Col key={day} className="day-name text-center">{day}</Col>
//                 ))}
//             </Row>

//             <Row className='days'>
//                 {daysInMonth.map((day) => (
//                     <Col key={day} xs={4} sm={3} md={2} className={`day text-center ${selectedDay && selectedDay.getDate() === day.getDate() ? 'selected' : ''}`} onClick={() => setSelectedDay(day)}>
//                         {day.getDate()}
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Calender;

import React, { useEffect, useState } from 'react';
import './Calender.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Calender() {

    const calender1style = {
        
        borderRadius: "5px",
        border: "none",
        height: "60px",
        overflow: "hidden",
        boxShadow: "0px 2px 4px 1px rgba(0, 0, 0, 0.2)",
        fontSize: "1rem",

    };
    const [currentDate, setcurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDay, setStartDay] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null);

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDay(new Date(year, month, 1).getDay());
    }, [currentDate]);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const preMonth = () => {
        setcurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setcurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <Container className='calender my-2 p-0' fluid>
            <Card style={calender1style}>
                <Row xs={12} lg={12} md={12} sm={12} className='header '>
                    <Col xs={4} lg={4} md={4} sm={4}>
                        <Row xs={12} sm={12} md={12} lg={12}>
                            {" "}
                        </Row>
                        <Row xs={12} sm={12} md={12} lg={12}>
                            <Button variant="link" onClick={preMonth} style={{ height: "30px", width: "30px", border: "1px solid #006EBE", borderRadius: "5px" }}>
                                <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#006EBE", width: "16.17px", height: "17px" }} />
                            </Button>
                            <Button variant="primary" onClick={nextMonth} style={{ marginLeft: "12px", border: "none", backgroundColor: "#006EBE", height: "30px", width: "30px", borderRadius: "5px" }}>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FFFFFF", width: "16.17px", height: "17px" }} />
                            </Button>
                        </Row>

                        <Row xs={12} sm={12} md={12} lg={12}>
                            {" "}
                        </Row>
                    </Col>
                    <Col xs={4} lg={4} md={4} sm={4} className='text-center'>
                        <span style={{ width: "173px", height: "27px", fontWeight: "400", fontSize: "22px", lineHeight: "27.29px" }}>
                            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                        </span>
                    </Col>
                    <Col xs={4} lg={4} md={4} sm={4} className='text-right' style={{ width: "80px", height: "37px", backgroundColor: "#006EBE", padding: "9px 18px", color: "white", borderRadius: "5px" }}>
                        <p style={{ width: "43px", height: "19px", fontWeight: "400", fontSize: "15px", lineHeight: "" }}>Today</p>
                    </Col>

                </Row>
            </Card>

            <Row className='days-name' style={{ color: "white" }}>
                {dayNames.map((day) => (
                    <Col key={day} xs={1} sm={1} md={1} lg={1} className="day-name text-center">{day}</Col>
                ))}
            </Row>

            <Row className='days'>
                {daysInMonth.map((day, index) => (
                    <Col key={day} xs={1} sm={1} md={1} lg={1} className={`day text-center ${selectedDay && selectedDay.getDate() === day.getDate() ? 'selected' : ''}`} onClick={() => setSelectedDay(day)}>
                        <div className="day-card">
                            {day.getDate()}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Calender;
