import React from "react"
import { Helmet } from "react-helmet"

const OpenGraph = ({
  url,
  title,
  description,
  image,
  imageAlt,
  publishedTime,
  modifiedTime,
  siteName,
  firstName,
  lastName,
  locale,
  isArticle,
}) => (
  <Helmet>
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}
    {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
    <meta property="og:site_name" content={siteName} />
    {!isArticle && <meta property="profile:first_name" content={firstName} />}
    {!isArticle && <meta property="profile:last_name" content={lastName} />}
    <meta property="og:locale" content={locale} />
    <meta property="og:type" content={isArticle ? `article` : `website`} />
    {isArticle && (
      <meta property="article:published_time" content={publishedTime} />
    )}
    {isArticle && modifiedTime && (
      <meta property="article:modified_time" content={modifiedTime} />
    )}
    {isArticle && (
      <meta property="article:author" content={`${firstName} ${lastName}`} />
    )}
  </Helmet>
)

export default OpenGraph
