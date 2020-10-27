import React from "react"
import { Helmet } from "react-helmet"

const Twitter = ({ title, description, cover, coverAlt, twitterHandle }) => {
  return (
    <Helmet>
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:creator" content={twitterHandle} />
      {cover && <meta property="twitter:image" content={cover} />}
      {coverAlt && <meta property="twitter:image:alt" content={coverAlt} />}
    </Helmet>
  )
}

export default Twitter
