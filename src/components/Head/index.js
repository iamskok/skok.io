import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import Person from "./Person"
import metaURL from "../../utils/meta-url"

const Head = ({ slug, title, description, date, cover, coverAlt, page }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    cover: defaultCover,
    coverAlt: defaultCoverAlt,
    firstName,
    lastName,
    siteUrl,
    siteName,
    email,
    telephone,
    jobTitle,
    address: { addressLocality, addressRegion, postalCode, streetAddress },
    socialMedia: { twitter: twitterHandle },
  } = useSiteMetadata()

  const url = metaURL(page, siteUrl, slug)

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    cover: cover
      ? `${siteUrl}${cover.childImageSharp.fluid.src}`
      : `${siteUrl}${defaultCover}`,
    coverAlt: coverAlt || defaultCoverAlt,
  }

  return (
    <>
      <Title title={seo.title} />
      <Description description={seo.description} />
      <OpenGraph
        title={seo.title}
        description={seo.description}
        image={seo.cover}
        imageAlt={seo.coverAlt}
        url={url}
        siteName={siteName}
        firstName={firstName}
        lastName={lastName}
        publishedTime={date}
        isBlogPost={page === `blog-post`}
      />
      <Twitter
        title={seo.title}
        description={seo.description}
        image={seo.cover}
        imageAlt={seo.coverAlt}
        creator={twitterHandle}
      />
      <Person
        firstName={firstName}
        lastName={lastName}
        email={email}
        telephone={telephone}
        jobTitle={jobTitle}
        addressLocality={addressLocality}
        addressRegion={addressRegion}
        postalCode={postalCode}
        streetAddress={streetAddress}
        url={siteUrl}
      />
      <PreloadLinks />
    </>
  )
}

export default Head
