import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './files.css'

const Files = (props) => {

  const [fileId, setFileId] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const createFeedback = async () => {
    const response = await fetch('http://localhost:3001/createfeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file_id: fileId,
        feedback_text: feedbackText,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  };

  const [files, setAppointments] = useState([]);
  const [clientId, setClientId] = useState('');

  const fetchAppointments = async () => {
    const response = await fetch(`http://localhost:3001/getuserfiles/${clientId}`);

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
    <div className="files-container">
      <Helmet>
        <title>Files - Superb Arctic Turtle</title>
        <meta property="og:title" content="Files - Superb Arctic Turtle" />
      </Helmet>
      <h1 className="files-text"> Files:</h1>
      <div className="ad-userBappoint-container">
      <div className="ad-userFiles-container">
      <input
        type="number"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        placeholder="Enter Client ID"
      />
      <button onClick={handleFetchClick}>Fetch</button>
      {files.map((file, index) => (
        <div key={index}>
          <p>........................</p>
          <p>FileID: {file.file_id}</p>
          <p>File progress: {file.file_progress}</p>
        </div>
      ))}
      </div>
      </div>

      <h1 className="files-text1">Create feedback:</h1>
      <div className="ad-createFeedbak-container">
      <input
        type="text"
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
        placeholder="File ID"
      />
      <input
        type="text"
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder="Feedback text"
      />
      <button onClick={createFeedback}>Create Feedback</button>
      </div>
      
      <div className="files-sidebar">
        <nav className="files-nav">
          <Link to="/dash" className="files-navlink1">
            Dashboard
          </Link>
          <Link to="/appoint" className="files-navlink2">
            Appointments
          </Link>
          <Link to="/balance" className="files-navlink3">
            Balance
          </Link>
          <Link to="/files" className="files-navlink4">
            Files
          </Link>
          <Link to="/login" className="files-navlink">
        Logout
      </Link>
        </nav>
      </div>
    </div>
  )
}

export default Files
