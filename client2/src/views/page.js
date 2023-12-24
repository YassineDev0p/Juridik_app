import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Superb Arctic Turtle</title>
        <meta property="og:title" content="Page - Superb Arctic Turtle" />
      </Helmet>
      <span className="page-text">Text</span>
    </div>
  )
}

export default Page
