import React from "react"
import { Helmet } from "react-helmet"

const Twitter = ({ title, description, image, imageAlt, creator }) => (
  <Helmet>
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
    <meta property="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:creator" content={creator} />
  </Helmet>
)

export default Twitter
