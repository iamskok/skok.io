import React from "react"
import Person from "./Person"
import Address from "./Address"
import Breadcrumbs from "./Breadcrumbs"
import Organization from "./Organization"
import schemId from "./schemaId"
import Page from "./Page"

const StructuredData = ({
  isPage,
  title,
  description,
  type,
  breadcrumb,
  genre,
  speakableSelector,
  url,
  to,
  slug,
  date,
  cover,
  covers,
  language,
  firstName,
  lastName,
  siteUrl,
  email,
  telephone,
  jobTitle,
  address,
  socialMedia,
  logo: { small: smallLogo, large: largeLogo },
  pages: {
    home: { breadcrumb: homeBreadcrumb },
    blog: { to: blogTo, breadcrumb: blogBreadcrumb },
    article: { breadcrumb: articleBreadcrumb },
  },
}) => {
  const fullName = `${firstName} ${lastName}`
  const logo = {
    small: `${siteUrl}${smallLogo}`,
    large: `${siteUrl}${largeLogo}`,
  }

  const breadcrumbs = [
    {
      id: siteUrl,
      name: `${homeBreadcrumb}`,
    },
  ]

  if (isPage.blog || isPage.contact || isPage.about) {
    breadcrumbs.push({
      id: `${siteUrl}${to}`,
      name: breadcrumb,
    })
  }

  if (isPage.article) {
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
      {!isPage.home && <Breadcrumbs itemListElement={breadcrumbs} />}
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
        image={logo.large}
        logo={logo.small}
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
        images={covers}
        genre={genre}
        inLanguage={language}
        mainEntityOfPage={url}
        cssSelector={speakableSelector}
      />
    </>
  )
}

export default StructuredData
