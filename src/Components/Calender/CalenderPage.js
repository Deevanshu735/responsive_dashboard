import React from 'react'
import UserData from './UserData.js';
import UserInternalData from './UserInternalData.js';
import Calender from './Calender.js';
import Navbar from '../Pages/Navbar.js';

function CalenderPage() {
  return (
    <div>
      <Navbar />
      <UserData />
      <UserInternalData />
      <Calender />
    </div>
  )
}

export default CalenderPage