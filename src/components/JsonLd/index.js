import React from "react"
import Person from "./Person"
import Address from "./Address"
import Breadcrumbs from "./Breadcrumbs"
import Organization from "./Organization"
import schemId from "./schemaId"
import Page from "./Page"

const JsonLd = ({
  to,
  url,
  slug,
  siteUrl,
  title,
  description,
  covers,
  type,
  date,
  updatedDate,
  breadcrumb,
  genre,
  language,
  firstName,
  lastName,
  socialMedia,
  email,
  telephone,
  jobTitle,
  address,
  logo,
  copyrightYear,
  pages: {
    home: { breadcrumb: homeBreadcrumb },
    blog: { to: blogTo, breadcrumb: blogBreadcrumb },
    article: { breadcrumb: articleBreadcrumb },
  },
  isPage,
  speakableSelector,
}) => {
  const fullName = `${firstName} ${lastName}`

  return (
    <>
      {!isPage.home && (
        <Breadcrumbs
          title={title}
          siteUrl={siteUrl}
          homeBreadcrumb={homeBreadcrumb}
          articleBreadcrumb={articleBreadcrumb}
          blogBreadcrumb={blogBreadcrumb}
          isPage={isPage}
          blogTo={blogTo}
          slug={slug}
          to={to}
          breadcrumb={breadcrumb}
        />
      )}
      <Address id={schemId(`address`)} address={address} />
      <Person
        id={schemId(`person`)}
        url={siteUrl}
        name={fullName}
        email={email}
        telephone={telephone}
        jobTitle={jobTitle}
        sameAs={socialMedia}
      />
      <Organization
        id={schemId(`organization`)}
        url={siteUrl}
        name={fullName}
        description={description}
        telephone={telephone}
        email={email}
        logo={logo}
        sameAs={socialMedia}
      />
      <Page
        url={url}
        name={title}
        headline={title}
        description={description}
        datePublished={date}
        dateModified={updatedDate}
        images={covers}
        type={type}
        genre={genre}
        inLanguage={language}
        mainEntityOfPage={url}
        copyrightYear={copyrightYear}
        cssSelector={speakableSelector}
      />
    </>
  )
}

export default JsonLd
