import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraphMetaTags from "./OpenGraphMetaTags"
import TwitterMetaTags from "./TwitterMetaTags"
import metaURL from "../../utils/meta-url"

const Head = ({ slug, title, description, date, cover, coverAlt, page }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    cover: defaultCover,
    coverAlt: defaultCoverAlt,
    authorFirstName,
    authorLastName,
    siteUrl,
    siteName,
    socialMedia: { twitter: twitterHandle },
  } = useSiteMetadata()

  const seo = {
    url: metaURL(page, siteUrl, slug),
    title: title || defaultTitle,
    description: description || defaultDescription,
    cover: cover?.childImageSharp?.fluid?.src || `${siteUrl}/${defaultCover}`,
    coverAlt: coverAlt || defaultCoverAlt,
    siteName,
    authorFirstName,
    authorLastName,
    date,
    twitterHandle,
  }

  return (
    <>
      <Title title={seo.title} />
      <Description description={seo.description} />
      <OpenGraphMetaTags
        title={seo.title}
        description={seo.description}
        image={seo.cover}
        imageAlt={seo.coverAlt}
        url={seo.url}
        siteName={seo.siteName}
        authorFirstName={seo.authorFirstName}
        authorLastName={seo.authorLastName}
        date={seo.date}
        isBlogPost={page === `blog-post`}
      />
      <TwitterMetaTags
        title={seo.title}
        description={seo.description}
        image={seo.cover}
        imageAlt={seo.coverAlt}
        creator={seo.twitterHandle}
      />
      <PreloadLinks />
    </>
  )
}

export default Head
