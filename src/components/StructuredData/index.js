import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Person from "./Person"
import Address from "./Address"
import Breadcrumbs from "./Breadcrumbs"
import Organization from "./Organization"
import schemId from "./schemaId"
import currentPageData from "../../utils/current-page-data"
import Page from "./Page"

const StructuredData = ({
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
    date: isArticle ? articleDate : false,
    genre: isArticle ? genre : false,
    speakableSelector: isArticle ? speakableSelector : false,
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

      {!isHome && <Breadcrumbs itemListElement={breadcrumbs} />}
      <Page
        type={type}
        datePublished={seo.date}
        dateModified={seo.date}
        headline={seo.title}
        name={seo.title}
        description={seo.description}
        url={url}
        image={seo.cover}
        genre={seo.genre}
        inLanguage={language}
        mainEntityOfPage={url}
        cssSelector={seo.speakableSelector}
      />
    </>
  )
}

export default StructuredData
