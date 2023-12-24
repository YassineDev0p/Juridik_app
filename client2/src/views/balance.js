import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './balance.css'

const Balance = (props) => {
  const [clients, setAppointments] = useState([]);
  const [clientId, setClientId] = useState('');

  const fetchAppointments = async () => {
    const response = await fetch(`http://localhost:3001/getbalance/${clientId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setAppointments(data);
  };

  const handleFetchClick = () => {
    fetchAppointments();
  };

  const [transactions, setTransactions] = useState([]);
  const [clientId2, setClientId2] = useState('');

  const fetchTransaction = async () => {
    const response = await fetch(`http://localhost:3001/getusertransactions/${clientId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setTransactions(data);
  };

  const handleFetchClick2 = () => {
    fetchTransaction();
  };
  return (
    <div className="balance-container">
      <Helmet>
        <title>Balance - Superb Arctic Turtle</title>
        <meta property="og:title" content="Balance - Superb Arctic Turtle" />
      </Helmet>

      <div className="ad-userCappoint-container">

      </div>  
      <div className="ad-userBalance-container">
      <input
        type="number"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Enter Client ID"
      />
      <button onClick={handleFetchClick}>Fetch Balance</button>
      {clients.map((client, index) => (
        <div key={index}>
          <p>Balance: {client.client_balance_amount}</p>
        </div>
      ))}
      </div>

      <div className="ad-userTransaction-container">
      <input
        type="number"
        value={clientId2}
        onChange={(e) => setClientId2(e.target.value)}
        placeholder="Enter Client ID"
      />
      <button onClick={handleFetchClick2}>Fetch Transactions</button>
      {transactions.map((transaction, index) => (
        <div key={index}>
          <p>........................</p>
          <p>Transaction ID: {transaction.transaction_id}</p>
          <p>Transaction date: {transaction.transaction_date}</p>
          <p>Transaction amount: {transaction.transaction_amount}</p>
        </div>
      ))}
      </div>
      <div className="balance-sidebar">
        <nav className="balance-nav">
          <Link to="/dash" className="balance-navlink">
            Dashboard
          </Link>
          <Link to="/appoint" className="balance-navlink1">
            Appointments
          </Link>
          <Link to="/balance" className="balance-navlink2">
            Balance
          </Link>
          <Link to="/files" className="balance-navlink3">
            Files
          </Link>
          <Link to="/login" className="balance-navlink4">
            Logout
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Balance
