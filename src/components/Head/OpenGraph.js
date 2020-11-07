import React from "react"
import { Helmet } from "react-helmet"

const OpenGraph = ({
  url,
  title,
  description,
  image,
  imageAlt,
  publishedTime,
  siteName,
  firstName,
  lastName,
  locale,
  seeAlso,
  isArticle,
}) => (
  <Helmet>
    {url && <meta property="og:url" content={url} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
    {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
    {siteName && <meta property="og:site_name" content={siteName} />}
    {!isArticle && <meta property="profile:first_name" content={firstName} />}
    {!isArticle && <meta property="profile:last_name" content={lastName} />}
    {locale && <meta property="og:locale" content={locale} />}
    <meta property="og:type" content={isArticle ? `article` : `website`} />
    {isArticle && (
      <meta property="article:published_time" content={publishedTime} />
    )}
    {isArticle && (
      <meta property="article:author" content={`${firstName} ${lastName}`} />
    )}
    {seeAlso &&
      Object.values(seeAlso).length > 0 &&
      Object.values(seeAlso).map((url, index) => (
        <meta key={index} property="og:see_also" content={url} />
      ))}
  </Helmet>
)

export default OpenGraph
