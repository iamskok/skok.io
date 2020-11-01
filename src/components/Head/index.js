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
import ContactPage from "./ContactPage"
import AboutPage from "./AboutPage"
import schemId from "./schemaId"

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
    speakableSelector,
    logo: { small: smallLogo, large: largeLogo },
  } = useSiteMetadata()

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

  const url = currentURL({
    slug,
    url: siteUrl,
    blogPost: isBlogPost,
    blog: isBlog,
    about: isAbout,
    contact: isContact,
  })

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
        seeAlso={socialMedia}
      />
      <Twitter
        title={seo.title}
        description={seo.description}
        image={seo.cover}
        imageAlt={seo.coverAlt}
        creator={twitterHandle}
      />
      <Address id={schemId(`address`)} address={address} />
      <Person
        id={schemId(`person`)}
        name={fullName}
        email={email}
        telephone={telephone}
        jobTitle={jobTitle}
        url={siteUrl}
        sameAs={socialMedia}
      />
      {isBlogPost && (
        <Organization
          id={schemId(`organization`)}
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
      {isHome && (
        <WebPage
          type="WebPage"
          url={url}
          name={fullName}
          image={seo.cover}
          inLanguage={language}
          description={defaultDescription}
          cssSelector={speakableSelector}
        />
      )}
      {isBlog && (
        <Blog
          type="Blog"
          headline={seo.title}
          name={seo.title}
          description={seo.description}
          url={url}
          image={seo.cover}
          genre={genre}
          inLanguage={language}
        />
      )}
      {isContact && (
        <ContactPage
          type="ContactPage"
          headline={seo.title}
          name={seo.title}
          description={seo.description}
          url={url}
          image={seo.cover}
          genre={genre}
          inLanguage={language}
          mainEntityOfPage={url}
          cssSelector={speakableSelector}
        />
      )}
      {isAbout && (
        <AboutPage
          type="AboutPage"
          headline={seo.title}
          name={seo.title}
          description={seo.description}
          url={url}
          image={seo.cover}
          genre={genre}
          inLanguage={language}
          mainEntityOfPage={url}
          cssSelector={speakableSelector}
        />
      )}
      {isBlogPost && (
        <Article
          type="Article"
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
          cssSelector={speakableSelector}
        />
      )}
    </>
  )
}

export default Head
