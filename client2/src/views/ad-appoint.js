import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ad-appoint.css'

const ADAppoint = (props) => {
  const [appoint, setAppoints] = useState([]);

  const getAppoints = async () => {
    try {
      const response = await fetch("http://localhost:3001/getAppoints");
      const jsonData = await response.json();
      setAppoints(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getAppoints();
  }, []);

  const changeAppointmentStatus = async (appointment_id, new_status) => {
    const response = await fetch('http://localhost:3001/changeAppointmentStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ appointment_id, new_status }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log(data);
  };
  
  return (
    <div className="ad-appoint-container">
      <Helmet>
        <title>AD-appoint - Superb Arctic Turtle</title>
        <meta property="og:title" content="AD-appoint - Superb Arctic Turtle" />
      </Helmet>
      <h1 className="ad-appoint-text">Appointments:</h1>
      <div className="appointments-container">
  
  {appoint.map((appointment, index) => (
  <div key={index}>
    <p> ...............................</p>
    <p>Appointment ID: {appointment.appointment_id}</p>
    <p>Client ID: {appointment.client_id}</p>
    <p>Appointment Date: {appointment.appointment_date}</p>
    <p>Appointment Status: {appointment.appointment_status}</p>
    <button onClick={() => changeAppointmentStatus(appointment.appointment_id, 'booked')}>Book Appointment</button>
    <button onClick={() => changeAppointmentStatus(appointment.appointment_id, 'cancelled')}>Cancel Appointment</button>
  </div>
))}



</div>

      <div className="ad-appoint-sidebar">
        <nav className="ad-appoint-nav">
          <Link to="/login" className="ad-appoint-navlink">
            Logout
          </Link>
          <Link to="/ad-appoint" className="ad-appoint-navlink1">
            Appointments
          </Link>
          <Link to="/ad-clients" className="ad-appoint-navlink2">
            Clients
          </Link>
          <Link to="/ad-updates" className="ad-appoint-navlink3">
            Updates
          </Link>
        </nav>
      </div>
      <Link to="/ad-files" className="ad-appoint-navlink4">
        Files
      </Link>
      <Link to="/ad-transac" className="ad-appoint-navlink5">
        Transactions
      </Link>
    </div>
  )
}

export default ADAppoint
