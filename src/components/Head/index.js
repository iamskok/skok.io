import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import Person from "./Person"
import Address from "./Address"
import WebPage from "./WebPage"
import Article from "./Article"
import Blog from "./Blog"
import Breadcrumbs from "./Breadcrumbs"
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
    logo: { small: smallLogo, large: largeLogo },
  } = useSiteMetadata()

  const url = currentURL(page, siteUrl, slug)
  const fullName = `${firstName} ${lastName}`
  const smallLogoURL = `${siteUrl}${smallLogo}`
  const largeLogoURL = `${siteUrl}${largeLogo}`
  const { twitter: twitterHandle } = socialMedia

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    cover: cover
      ? `${siteUrl}${cover.childImageSharp.fluid.src}`
      : `${siteUrl}${defaultCover}`,
    coverAlt: coverAlt || defaultCoverAlt,
  }

  const isBlogPost = page === `blog-post`
  const isBlog = page === `blog`
  const isHome = page === `home`
  const isAbout = page === `about`
  const isContact = page === `contact`

  return (
    <>
      <PreloadLinks />
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
      <Address address={address} />
      <Person
        name={fullName}
        email={email}
        telephone={telephone}
        jobTitle={jobTitle}
        url={siteUrl}
        sameAs={socialMedia}
      />
      {isHome && (
        <WebPage
          url={url}
          name={fullName}
          image={seo.cover}
          inLanguage={language}
          description={defaultDescription}
        />
      )}
      {(isBlogPost || isBlog) && (
        <Breadcrumbs
          isBlog={isBlog}
          itemListElement={[
            {
              id: siteUrl,
              name: `🏠 Home`,
            },
            {
              id: `${siteUrl}/blog`,
              name: `🗒 Blog`,
            },
            {
              id: url,
              name: `📝 ${seo.title}`,
            },
          ]}
        />
      )}
      {isBlogPost && (
        <Organization
          url={url}
          name={fullName}
          description={defaultDescription}
          telephone={telephone}
          email={email}
          image={largeLogoURL}
          logo={smallLogoURL}
          sameAs={socialMedia}
        />
      )}
      {isBlogPost && (
        <Article
          datePublished={date}
          dateModified={date}
          headline={seo.title}
          name={seo.title}
          description={seo.description}
          url={url}
          image={seo.cover}
          genre={genre}
          inLanguage={language}
          mainEntityOfPage={url}
        />
      )}
      {isBlog && (
        <Blog
          headline={seo.title}
          name={seo.title}
          description={seo.description}
          url={url}
          image={seo.cover}
          genre={genre}
          inLanguage={language}
        />
      )}
    </>
  )
}

export default Head
