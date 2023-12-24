import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ad-transac.css'

const ADTransac = (props) => {

    
  const [transaction, setTransaction] = useState({
    client_id: '',
    transaction_amount: '',
  });

  const handleChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch('http://localhost:3001/createTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.text();
    console.log(data);
  };

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('http://localhost:3001/getTransactions');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);
  return (
    <div className="ad-transac-container">
      <Helmet>
        <title>AD-transac - Superb Arctic Turtle</title>
        <meta property="og:title" content="AD-transac - Superb Arctic Turtle" />
      </Helmet>
      <div className="ad-transac-sidebar">
        <nav className="ad-transac-nav">
          <Link to="/ad-appoint" className="ad-transac-navlink">
            Appointments
          </Link>
          <Link to="/ad-clients" className="ad-transac-navlink1">
            Clients
          </Link>
          <Link to="/ad-updates" className="ad-transac-navlink2">
            Updates
          </Link>
          <Link to="/ad-files" className="ad-transac-navlink3">
            Files
          </Link>
          <Link to="/ad-transac" className="ad-transac-navlink4">
            Transactions
          </Link>
        </nav>
      </div>
      <Link to="/login" className="ad-transac-navlink5">
        Logout
      </Link>
      <h1 className="ad-transac-text">Transactions:</h1>
      <div className="ad-transaction-container">
      {transactions.map((transaction, index) => (
        <div key={index}>
          <p>............................................</p>
          <p>Transaction ID: {transaction.transaction_id}</p>
          <p>Client ID: {transaction.client_id}</p>
          <p>Transaction Date: {transaction.transaction_date}</p>
          <p>Transaction Amount: {transaction.transaction_amount}</p>
        </div>
      ))}
      </div>
      <div className="ad-createtransaction-container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="client_id"
          value={transaction.client_id}
          onChange={handleChange}
          placeholder="Client ID"
          required
        />
        <input
          type="number"
          name="transaction_amount"
          value={transaction.transaction_amount}
          onChange={handleChange}
          placeholder="Transaction Amount"
          required
        />
        <button type="submit">Create Transaction</button>
      </form>
      </div>
    </div>
  )
}

export default ADTransac
