import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './dash.css'

const Dash = (props) => {
  return (
    <div className="dash-container">
      <Helmet>
        <title>Dash - Superb Arctic Turtle</title>
        <meta property="og:title" content="Dash - Superb Arctic Turtle" />
      </Helmet>
      <span className="dash-text">WELCOME</span>
      <div className="dash-container1">
        <div className="dash-container2">
          <div className="dash-sidebar">
            <nav className="dash-nav">
              <Link to="/dash" className="dash-navlink">
                Dashboard
              </Link>
              <Link to="/appoint" className="dash-navlink1">
                Appointments
              </Link>
              <Link to="/balance" className="dash-navlink2">
                Balance
              </Link>
              <Link to="/files" className="dash-navlink3">
                Files
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Link to="/login" className="dash-navlink4">
        Logout
      </Link>
    </div>
  )
}

export default Dash
