import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './ad-files.css'

const ADFiles = (props) => {

  const [fileUpdate, setFileUpdate] = useState({
    file_id: '',
    file_progress: '',
  });

  const handleChange2 = (event) => {
    setFileUpdate({
      ...fileUpdate,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch('http://localhost:3001/update_file_progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fileUpdate),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.text();
    if (data.length) {
      console.log(JSON.parse(data));
    }
  };

  const [clientID, setClientID] = useState('');

  const handleChange = (event) => {
    setClientID(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/createFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ client_id: clientID }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    if (data.length) {
      console.log(JSON.parse(data));
    }
  };


  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getFiles')
      .then(response => response.json())
      .then(data => setFiles(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="ad-files-container">
      <Helmet>
        <title>AD-Files - Superb Arctic Turtle</title>
        <meta property="og:title" content="AD-Files - Superb Arctic Turtle" />
      </Helmet>
      <h1 className="ad-files-text">Client files:</h1>
      <div className="ad-getfiles-container">
      {files.map((file, index) => (
          <li key={index}>
            <p>File ID: {file.file_id}</p>
            <p>Client ID: {file.client_id}</p>
            <p>File Progress: {file.file_progress}</p>
          </li>
        ))}
        </div>
        <div className="ad-createfiles-container">
        <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="client_id"
          value={clientID}
          onChange={handleChange}
          placeholder="Client ID"
          required
        />
        <button type="submit">Add File</button>
      </form>
      </div>
      <div className="ad-changefilesprogress-sidebar">
      <form onSubmit={handleUpdateSubmit}>
  <input
    type="number"
    name="file_id"
    value={fileUpdate.file_id}
    onChange={handleChange2}
    placeholder="File ID"
    required
  />
  <input
    type="text"
    name="file_progress"
    value={fileUpdate.file_progress}
    onChange={handleChange2}
    placeholder="New File Progress"
    required
  />
  <button type="submit">Update File Progress</button>

      </form>
      </div>
      
      <div className="ad-files-sidebar">
        <nav className="ad-files-nav">
          <Link to="/ad-appoint" className="ad-files-navlink">
            Appointments
          </Link>
          <Link to="/ad-clients" className="ad-files-navlink1">
            Clients
          </Link>
          <Link to="/ad-updates" className="ad-files-navlink2">
            Updates
          </Link>
          <Link to="/ad-files" className="ad-files-navlink3">
            Files
          </Link>
          <Link to="/ad-transac" className="ad-files-navlink4">
            Transactions
          </Link>
        </nav>
      </div>
      <Link to="/login" className="ad-files-navlink5">
        Logout
      </Link>
    </div>
  )
}

export default ADFiles
