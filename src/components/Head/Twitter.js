import React from "react"
import { Helmet } from "react-helmet"

const Twitter = ({ title, description, image, imageAlt, creator }) => (
  <Helmet>
    <meta property="twitter:card" content="summary_large_image" />
    {title && <meta property="twitter:title" content={title} />}
    {description && (
      <meta property="twitter:description" content={description} />
    )}
    {image && <meta property="twitter:image" content={image} />}
    {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    {creator && <meta name="twitter:creator" content={creator} />}
  </Helmet>
)

export default Twitter
