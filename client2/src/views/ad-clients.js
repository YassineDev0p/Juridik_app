import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ad-clients.css'

const ADClients = (props) => {

  const [client, setClient] = useState({
    client_fname: '',
    client_lname: '',
    client_balance_amount: '',
  });

  const handleChange = (event) => {
    setClient({
      ...client,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/createClient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  };


    const [clients, setClients] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/getClients')
        .then(response => response.json())
        .then(data => setClients(data))
        .catch(error => console.error(error));
  
      fetch('http://localhost:3001/getFeedbacks')
        .then(response => response.json())
        .then(data => setFeedbacks(data))
        .catch(error => console.error(error));
    }, []);

  return (
    <div className="ad-clients-container">
      <Helmet>
        <title>AD-clients - Superb Arctic Turtle</title>
        <meta property="og:title" content="AD-clients - Superb Arctic Turtle" />
      </Helmet>
      <div className="ad-clients-sidebar">
        <Link to="/ad-updates" className="ad-clients-navlink">
          Updates
        </Link>
        <nav className="ad-clients-nav">
          <Link to="/ad-appoint" className="ad-clients-navlink1">
            Appointments
          </Link>
          <Link to="/ad-clients" className="ad-clients-navlink2">
            Clients
          </Link>
        </nav>
      </div>
      <ul className="list"></ul>
      <h1 className="ad-clients-text">Client feedback:</h1>
      <h1 className="ad-clients-text1">Clients :</h1>
      <div className="ad-newclient-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="client_fname"
          value={client.client_fname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="client_lname"
          value={client.client_lname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="number"
          name="client_balance_amount"
          value={client.client_balance_amount}
          onChange={handleChange}
          placeholder="Balance Amount"
          required
        />
        <button type="submit">Add Client</button>
      </form>
      </div>
      <div className="ad-clinet-container">
      {clients.map((client, index) => (
    <li key={index}>
      <p>ID: {client.client_id}</p>
      <p>First Name: {client.client_fname}</p>
      <p>Last Name: {client.client_lname}</p>
      <p>Balance Amount: {client.client_balance_amount}</p>
    </li>
  ))}
  </div>
  <div className="ad-feedback-container">
  {feedbacks.map((feedback, index) => (
          <li key={index}>
            <p>File ID: {feedback.file_id}</p>
            <p>Feedback Text: {feedback.feedback_text}</p>
            <p>Feedback Date: {feedback.feedback_date}</p>
          </li>
        ))}
</div>
      <Link to="/login" className="ad-clients-navlink3">
        Logout
      </Link>
      <Link to="/ad-files" className="ad-clients-navlink4">
        Files
      </Link>
      <Link to="/ad-transac" className="ad-clients-navlink5">
        Transactions
      </Link>
    </div>
  )
}

export default ADClients
