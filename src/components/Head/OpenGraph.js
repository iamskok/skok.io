import React from "react"
import { Helmet } from "react-helmet"

const OpenGraph = ({
  title,
  description,
  publishedTime,
  image,
  imageAlt,
  url,
  siteName,
  firstName,
  lastName,
  isBlogPost,
}) => {
  return (
    <Helmet>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={isBlogPost ? `article` : `website`} />
      {isBlogPost && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isBlogPost && (
        <meta property="article:author" content={`${firstName} ${lastName}`} />
      )}
      {!isBlogPost && (
        <meta property="profile:first_name" content={firstName} />
      )}
      {!isBlogPost && <meta property="profile:last_name" content={lastName} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
    </Helmet>
  )
}

export default OpenGraph
