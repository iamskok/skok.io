import React from "react"
import { Helmet } from "react-helmet"

const MetaTags = ({ description }) => (
  <Helmet>
    {description && <meta name="description" content={description} />}
  </Helmet>
)

export default MetaTags
