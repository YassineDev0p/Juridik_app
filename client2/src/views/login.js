import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const LOGIN = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>LOGIN - Superb Arctic Turtle</title>
        <meta property="og:title" content="LOGIN - Superb Arctic Turtle" />
      </Helmet>
      <Link to="/dash" className="login-navlink button">
        Client side
      </Link>
      <Link to="/ad-clients" className="login-navlink1 button">
        Admin side
      </Link>
      <h1>Heading</h1>
      <span>Text</span>
      <Link to="/" className="login-navlink2 button">
        Home
      </Link>
      <h1 className="login-text2">Choose login side</h1>
    </div>
  )
}

export default LOGIN
