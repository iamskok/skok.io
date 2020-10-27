import React from "react"
import { Helmet } from "react-helmet"

const OpenGraph = ({
  title,
  description,
  date,
  cover,
  coverAlt,
  url,
  siteName,
  authorFirstName,
  authorLastName,
  isBlogPost,
}) => {
  return (
    <Helmet>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={isBlogPost ? `article` : `website`} />
      {isBlogPost && <meta property="article:published_time" content={date} />}
      {isBlogPost && (
        <meta
          property="article:author"
          content={`${authorFirstName} ${authorLastName}`}
        />
      )}
      {!isBlogPost && (
        <meta property="profile:first_name" content={authorFirstName} />
      )}
      {!isBlogPost && (
        <meta property="profile:last_name" content={authorLastName} />
      )}
      <meta property="og:image" content={cover} />
      <meta property="og:image:alt" content={coverAlt} />
    </Helmet>
  )
}

export default OpenGraph
