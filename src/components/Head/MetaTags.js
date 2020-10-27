import React from "react"
import { Helmet } from "react-helmet"

const MetaTags = ({ title, description, author }) => (
  <Helmet>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:creator" content={author} />
  </Helmet>
)

export default MetaTags
