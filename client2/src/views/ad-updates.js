import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ad-updates.css'

const ADUpdates = (props) => {

  const [update, setUpdate] = useState({
    file_id: '',
    update_description: '',
  });

  const handleChange = (event) => {
    setUpdate({
      ...update,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/createUpdate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  };
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getUpdates')
      .then(response => response.json())
      .then(data => setUpdates(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="ad-updates-container">
      <Helmet>
        <title>AD-updates - Superb Arctic Turtle</title>
        <meta property="og:title" content="AD-updates - Superb Arctic Turtle" />
      </Helmet>
      <div className="ad-updates-sidebar">
        <nav className="ad-updates-nav">
          <Link to="/ad-appoint" className="ad-updates-navlink">
            Appointments
          </Link>
          <Link to="/ad-clients" className="ad-updates-navlink1">
            Clients
          </Link>
          <Link to="/ad-updates" className="ad-updates-navlink2">
            Updates
          </Link>
        </nav>
      </div>
      <div className="ad-update-container">
        <h1>Files updates</h1>
      {updates.map((update, index) => (
          <li key={index}>
            <p>Update ID: {update.update_id}</p>
            <p>File ID: {update.file_id}</p>
            <p>Update Description: {update.update_description}</p>
            <p>Update Date: {update.update_date}</p>
          </li>
        ))}
</div>
<div className="ad-createupdate-container"> 
<form onSubmit={handleSubmit}>
        <input
          type="number"
          name="file_id"
          value={update.file_id}
          onChange={handleChange}
          placeholder="File ID"
          required
        />
        <input
          type="text"
          name="update_description"
          value={update.update_description}
          onChange={handleChange}
          placeholder="Update Description"
          required
        />
        <button type="submit">Add Update</button>
      </form>
      </div>
      
      <Link to="/login" className="ad-updates-navlink3">
        Logout
      </Link>
      <Link to="/ad-files" className="ad-updates-navlink4">
        Files
      </Link>
      <Link to="/ad-transac" className="ad-updates-navlink5">
        Transactions
      </Link>
    </div>
  )
}

export default ADUpdates
