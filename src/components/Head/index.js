import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import Person from "./Person"
import Website from "./Website"
import currentURL from "../../utils/current-url"

const Head = ({ slug, title, description, date, cover, coverAlt, page }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    cover: defaultCover,
    coverAlt: defaultCoverAlt,
    language,
    firstName,
    lastName,
    siteUrl,
    siteName,
    email,
    telephone,
    jobTitle,
    address,
    socialMedia,
  } = useSiteMetadata()

  const url = currentURL(page, siteUrl, slug)
  const fullName = `${firstName} ${lastName}`
  const { twitter: twitterHandle } = socialMedia

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
        locale={language}
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
        name={fullName}
        email={email}
        telephone={telephone}
        jobTitle={jobTitle}
        address={address}
        url={siteUrl}
        sameAs={socialMedia}
      />
      <Website
        url={siteUrl}
        name={fullName}
        image={seo.cover}
        inLanguage={language}
        description={description}
      />
      <PreloadLinks />
    </>
  )
}

export default Head
