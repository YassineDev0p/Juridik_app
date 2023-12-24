import React from 'react'

import { Helmet } from 'react-helmet'

import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>profile - Superb Arctic Turtle</title>
        <meta property="og:title" content="profile - Superb Arctic Turtle" />
      </Helmet>
    </div>
  )
}

export default Profile
