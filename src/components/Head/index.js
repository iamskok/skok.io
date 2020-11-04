import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import currentPageData from "../../utils/current-page-data"
// import Person from "./Person"
// import Address from "./Address"
// import WebPage from "./WebPage"
// import Article from "./Article"
// import Blog from "./Blog"
// import Breadcrumbs from "./Breadcrumbs"
// import Organization from "./Organization"
// import currentURL from "../../utils/current-url"
// import ContactPage from "./ContactPage"
// import AboutPage from "./AboutPage"
// import schemId from "./schemaId"
// import Page from "./Page"

const Head = ({
  title,
  description,
  // type,
  // breadcrumb,
  pageName,
  // genre,
  // speakableSelector,
  url = null,
  // to = null,
  // slug = null,
  date = null,
  cover = null,
  coverAlt = null,
}) => {
  const {
    language,
    firstName,
    lastName,
    // siteUrl,
    // email,
    // telephone,
    // jobTitle,
    // address,
    socialMedia,
    // genre,
    // speakableSelector,
    pages,
    // logo: { small: smallLogo, large: largeLogo },
  } = useSiteMetadata()

  const {
    home: { title: homeTitle, breadcrumb: homeBreadcrumb },
    // blog: { to: blogTo, breadcrumb: blogBreadcrumb },
    // article: { breadcrumb: articleBreadcrumb },
  } = pages

  // const fullName = `${firstName} ${lastName}`
  // const smallLogoURL = `${siteUrl}${smallLogo}`
  // const largeLogoURL = `${siteUrl}${largeLogo}`
  const { twitter: twitterHandle } = socialMedia

  const isArticle = pageName === `article`
  const isBlog = pageName === `blog`
  const isHome = pageName === `home`
  const isAbout = pageName === `about`
  const isContact = pageName === `contact`

  // const { title, description, cover, coverAlt, url } = currentPageData({
  //   pages,
  //   url: siteUrl,
  //   slug,
  //   isArticle,
  //   isBlog,
  //   isAbout,
  //   isContact,
  // })

  return (
    <>
      <PreloadLinks />
      <Title title={title} />
      <Description description={description} />
      <OpenGraph
        title={title}
        description={description}
        locale={language}
        image={cover}
        imageAlt={coverAlt}
        url={url}
        siteName={homeTitle}
        firstName={firstName}
        lastName={lastName}
        publishedTime={date}
        isArticle={isArticle}
        seeAlso={socialMedia}
      />
      <Twitter
        title={title}
        description={description}
        image={cover}
        imageAlt={coverAlt}
        creator={twitterHandle}
      />
    </>
  )
}

export default Head
