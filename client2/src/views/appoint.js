import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './appoint.css'

const Appoint = (props) => {

  const [clientId4, setClientId4] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  // ... other functions ...

  const createAppointment = async () => {
    const response = await fetch('http://localhost:3001/createAppoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId4,
        appointment_date: appointmentDate,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  };

  const [appointments3, setAppointments3] = useState([]);
  const [clientId3, setClientId3] = useState('');

  const fetchAppointments3 = async () => {
    const response = await fetch(`http://localhost:3001/getuserPendingAppointments/${clientId3}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setAppointments3(data);
  };

  const handleFetchClick3 = () => {
    fetchAppointments3();
  };

    const [appointments2, setAppointments2] = useState([]);
    const [clientId2, setClientId2] = useState('');
  
    const fetchAppointments2 = async () => {
      console.log(`Fetching from: http://localhost:3001/getuserCancelledAppointments/${clientId2}`);
    const response = await fetch(`http://localhost:3001/getuserCancelledAppointments/${clientId2}`);
     
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setAppointments2(data);
    };
  
    const handleFetchClick2 = () => {
      fetchAppointments2();
    };


  const [appointments, setAppointments] = useState([]);
  const [clientId, setClientId] = useState('');

  const fetchAppointments = async () => {
    const response = await fetch(`http://localhost:3001/getuserBookedAppointments/${clientId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setAppointments(data);
  };

  const handleFetchClick = () => {
    fetchAppointments();
  };

  return (
    <div className="appoint-container">
      <Helmet>
        <title>Appoint - Superb Arctic Turtle</title>
        <meta property="og:title" content="Appoint - Superb Arctic Turtle" />
      </Helmet>
      <h2 className="appoint-text">Request a  new appointment: </h2>
      <h2 className="appoint-text1">Booked appointments:</h2>
      
      <h2 className="appoint-text3">Pending appointments:</h2>
      <div className="ad-userBappoint-container">
      <input
        type="number"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Enter Client ID"
      />
      <button onClick={handleFetchClick}>Fetch</button>
      {appointments.map((appointment, index) => (
        <div key={index}>
          <p>Appointment ID: {appointment.appointment_id}</p>
          <p>Date: {appointment.appointment_date}</p>
          <p>Status: {appointment.appointment_status}</p>
        </div>
      ))}
      </div>

      <div className="ad-userCappoint-container">
      <input
        type="number"
        value={clientId2}
        onChange={(e) => setClientId2(e.target.value)}
        placeholder="Enter Client ID"
      />
      <button onClick={handleFetchClick2}>Fetch</button>
      {appointments2.map((appointment, index) => (
        <div key={index}>
          <p>Appointment ID: {appointment.appointment_id}</p>
          <p>Date: {appointment.appointment_date}</p>
          <p>Status: {appointment.appointment_status}</p>
        </div>
      ))}
      </div>

      <div className="ad-userPappoint-container">
      <input
        type="number"
        value={clientId3}
        onChange={(e) => setClientId3(e.target.value)}
        placeholder="Enter Client ID"
      />
      <button onClick={handleFetchClick3}>Fetch</button>
      {appointments3.map((appointment, index) => (
        <div key={index}>
          <p>Appointment ID: {appointment.appointment_id}</p>
          <p>Date: {appointment.appointment_date}</p>
          <p>Status: {appointment.appointment_status}</p>
        </div>
      ))}
      </div>

      <div className="ad-createappoint-container">
      <input
        type="number"
        value={clientId4}
        onChange={(e) => setClientId4(e.target.value)}
        placeholder="Enter Client ID"
      />
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        placeholder="Enter Appointment Date"
      />
      <button onClick={createAppointment}>Create Appointment</button>

      </div>

      
      
      <h2 className="appoint-text2">Cancelled appointments:</h2>
      <div className="appoint-sidebar">
        <nav className="appoint-nav">
          <Link to="/dash" className="appoint-navlink">
            Dashboard
          </Link>
          <Link to="/appoint" className="appoint-navlink1">
            Appointments
          </Link>
          <Link to="/balance" className="appoint-navlink2">
            Balance
          </Link>
          <Link to="/files" className="appoint-navlink3">
            Files
          </Link>
        </nav>
        <Link to="/login" className="appoint-navlink4">
          Logout
        </Link>
      </div>
    </div>
  )
}

export default Appoint
