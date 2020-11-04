import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Person from "./Person"
import Address from "./Address"
import Breadcrumbs from "./Breadcrumbs"
import Organization from "./Organization"
import schemId from "./schemaId"
import Page from "./Page"

const StructuredData = ({
  title,
  description,
  type,
  breadcrumb,
  pageName,
  genre,
  speakableSelector,
  url = null,
  to = null,
  slug = null,
  date = null,
  cover = null,
  coverAlt = null,
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
    pages,
    logo: { small: smallLogo, large: largeLogo },
  } = useSiteMetadata()

  const {
    home: { breadcrumb: homeBreadcrumb },
    blog: { to: blogTo, breadcrumb: blogBreadcrumb },
    article: { breadcrumb: articleBreadcrumb },
  } = pages

  const fullName = `${firstName} ${lastName}`
  const smallLogoURL = `${siteUrl}${smallLogo}`
  const largeLogoURL = `${siteUrl}${largeLogo}`

  const isArticle = pageName === `article`
  const isBlog = pageName === `blog`
  const isHome = pageName === `home`
  const isAbout = pageName === `about`
  const isContact = pageName === `contact`

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
        id: `${siteUrl}${slug}`,
        name: `${articleBreadcrumb} ${title}`,
      }
    )
  }

  return (
    <>
      {!isHome && <Breadcrumbs itemListElement={breadcrumbs} />}
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
        url={siteUrl}
        name={fullName}
        description={description}
        telephone={telephone}
        email={email}
        image={largeLogoURL}
        logo={smallLogoURL}
        sameAs={socialMedia}
      />
      <Page
        type={type}
        datePublished={date}
        dateModified={date}
        headline={title}
        name={title}
        description={description}
        url={url}
        image={cover}
        genre={genre}
        inLanguage={language}
        mainEntityOfPage={url}
        cssSelector={speakableSelector}
      />
    </>
  )
}

export default StructuredData
