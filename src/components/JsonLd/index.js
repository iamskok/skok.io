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
  modifiedDate,
  breadcrumb,
  language,
  firstName,
  lastName,
  socialMedia,
  address,
  logo,
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
        sameAs={socialMedia}
      />
      <Organization id={schemId(`organization`)} url={siteUrl} logo={logo} />
      <Page
        url={url}
        name={title}
        headline={title}
        description={description}
        datePublished={date}
        dateModified={modifiedDate}
        images={covers}
        type={type}
        inLanguage={language}
        mainEntityOfPage={url}
        cssSelector={speakableSelector}
      />
    </>
  )
}

export default JsonLd
