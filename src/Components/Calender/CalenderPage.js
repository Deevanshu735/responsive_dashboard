import React from 'react'
import Navbar from './Navbar.js';
import UserData from './UserData.js';
import UserInternalData from './UserInternalData.js';
import Calender from './Calender.js';

function CalenderPage() {
  return (
    <div>
        <Navbar/>
        <UserData/>
        <UserInternalData/>
        <Calender/>
    </div>
  )
}

export default CalenderPage