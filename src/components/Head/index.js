import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"

const Head = ({ isPage, title, description, url, date, cover, coverAlt }) => {
  const {
    language,
    firstName,
    lastName,
    socialMedia,
    pages: {
      home: { title: siteName },
    },
  } = useSiteMetadata()

  const { twitter: twitterHandle } = socialMedia

  return (
    <>
      <PreloadLinks />
      <Title title={title} />
      <Description description={description} />
      <OpenGraph
        title={title}
        description={description}
        locale={language}
        publishedTime={date}
        image={cover}
        imageAlt={coverAlt}
        url={url}
        siteName={siteName}
        firstName={firstName}
        lastName={lastName}
        isArticle={isPage.article}
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
