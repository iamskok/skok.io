import React from "react"
import Person from "./Person"
import Address from "./Address"
import Breadcrumbs from "./Breadcrumbs"
import Organization from "./Organization"
import Page from "./Page"

const SchemaOrg = ({
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
  speakableSelector,
  isPage,
  pages: {
    home: { breadcrumb: homeBreadcrumb },
    blog: { to: blogTo, breadcrumb: blogBreadcrumb },
    article: { breadcrumb: articleBreadcrumb },
  },
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
      <Address address={address} />
      <Person url={siteUrl} name={fullName} sameAs={socialMedia} />
      <Organization url={siteUrl} name={fullName} logo={logo} />
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

export default SchemaOrg
