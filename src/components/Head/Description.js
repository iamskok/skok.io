import React from "react"
import { Helmet } from "react-helmet"

const Description = ({ description }) => (
  <Helmet>
    <meta name="description" content={description} />
  </Helmet>
)

export default Description
