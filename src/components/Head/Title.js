import React from "react"
import { Helmet } from "react-helmet"

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
    </Helmet>
  )
}

export default Title
