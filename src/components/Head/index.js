import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import Person from "./Person"
import Address from "./Address"
import Website from "./Website"
import Article from "./Article"
import Organization from "./Organization"
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
    genre,
    logoSmall,
    logoLarge,
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
    logoSmall: `${siteUrl}${logoSmall}`,
    logoLarge: `${siteUrl}${logoLarge}`,
  }

  const isBlogPost = page === `blog-post`
  const isBlog = page === `blog`

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
        isBlogPost={isBlogPost}
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
        url={siteUrl}
        sameAs={socialMedia}
      />
      <Address address={address} />
      {isBlogPost && (
        <Article
          datePublished={date}
          dateModified={date}
          headline={seo.title}
          name={seo.title}
          description={seo.description}
          mainEntityOfPage={url}
          url={url}
          image={seo.cover}
          genre={genre}
          inLanguage={language}
        />
      )}
      <Website
        url={siteUrl}
        name={fullName}
        image={seo.cover}
        inLanguage={language}
        description={defaultDescription}
      />
      <Organization
        name={fullName}
        description={defaultDescription}
        founder={fullName}
        telephone={telephone}
        email={email}
        image={seo.logoLarge}
        logo={seo.logoSmall}
        url={seo.url}
        sameAs={socialMedia}
      />
      <PreloadLinks />
    </>
  )
}

export default Head
