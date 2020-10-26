import React from "react"
import { Helmet } from "react-helmet"

const MetaTags = ({ description }) => (
  <Helmet>
    <meta name="description" content={description} />
  </Helmet>
)

export default MetaTags
