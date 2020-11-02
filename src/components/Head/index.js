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
// import currentURL from "../../utils/current-url"
import ContactPage from "./ContactPage"
import AboutPage from "./AboutPage"
import schemId from "./schemaId"
import currentPageData from "../../utils/current-page-data"

const Head = ({
  slug,
  title: articleTitle,
  description: articleDescription,
  date: articleDate,
  cover: articleCover,
  coverAlt: articleCoverAlt,
  pageName,
}) => {
  const {
    language,
    firstName,
    lastName,
    siteUrl,
    email,
    telephone,
    jobTitle,
    address,
    socialMedia,
    genre,
    speakableSelector,
    pages,
    logo: { small: smallLogo, large: largeLogo },
  } = useSiteMetadata()

  const {
    home: { title: homeTitle, breadcrumb: homeBreadcrumb },
    blog: { to: blogTo, breadcrumb: blogBreadcrumb },
    article: { breadcrumb: articleBreadcrumb },
  } = pages

  const fullName = `${firstName} ${lastName}`
  const smallLogoURL = `${siteUrl}${smallLogo}`
  const largeLogoURL = `${siteUrl}${largeLogo}`
  const { twitter: twitterHandle } = socialMedia

  const isArticle = pageName === `article`
  const isBlog = pageName === `blog`
  const isHome = pageName === `home`
  const isAbout = pageName === `about`
  const isContact = pageName === `contact`

  const {
    title,
    description,
    cover,
    coverAlt,
    url,
    type,
    breadcrumb,
    to,
  } = currentPageData({
    pages,
    url: siteUrl,
    slug,
    isArticle,
    isBlog,
    isAbout,
    isContact,
  })

  const seo = {
    cover: isArticle
      ? articleCover?.childImageSharp?.fluid?.src
        ? `${siteUrl}${articleCover.childImageSharp.fluid.src}`
        : false
      : `${siteUrl}${cover}`,
    coverAlt: isArticle
      ? articleCoverAlt
        ? articleCoverAlt
        : false
      : coverAlt,
    title: isArticle ? articleTitle : title,
    description: isArticle ? articleDescription : description,
  }

  const breadcrumbs = [
    {
      id: siteUrl,
      name: `${homeBreadcrumb}`,
    },
  ]

  if (isBlog || isContact || isAbout) {
    breadcrumbs.push({
      id: `${siteUrl}${to}`,
      name: breadcrumb,
    })
  }

  if (isArticle) {
    breadcrumbs.push(
      {
        id: `${siteUrl}${blogTo}`,
        name: blogBreadcrumb,
      },
      {
        id: url,
        name: `${articleBreadcrumb} ${seo.title}`,
      }
    )
  }

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
        siteName={homeTitle}
        firstName={firstName}
        lastName={lastName}
        publishedTime={articleDate}
        isArticle={isArticle}
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
      {isArticle && (
        <Organization
          id={schemId(`organization`)}
          url={url}
          name={fullName}
          description={seo.description}
          telephone={telephone}
          email={email}
          image={largeLogoURL}
          logo={smallLogoURL}
          sameAs={socialMedia}
        />
      )}
      {!isHome && <Breadcrumbs itemListElement={breadcrumbs} />}
      {isHome && (
        <WebPage
          type={type}
          url={url}
          name={fullName}
          image={seo.cover}
          inLanguage={language}
          description={seo.description}
          cssSelector={speakableSelector}
        />
      )}
      {isBlog && (
        <Blog
          type={type}
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
          type={type}
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
          type={type}
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
      {isArticle && (
        <Article
          type={type}
          datePublished={articleDate}
          dateModified={articleDate}
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
