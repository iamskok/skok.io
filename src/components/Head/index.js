import React from "react"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"

const Head = ({
  isPage,
  title,
  description,
  url,
  date,
  covers,
  coverAlt,
  language,
  firstName,
  lastName,
  socialMedia,
  pages: {
    home: { title: siteName },
  },
}) => {
  const { twitter: twitterHandle } = socialMedia
  const twitterCover = covers?.twitter
  const facebookCover = covers?.facebook

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
        image={facebookCover}
        imageAlt={coverAlt}
        url={url}
        siteName={siteName}
        firstName={firstName}
        lastName={lastName}
        seeAlso={socialMedia}
        isArticle={isPage.article}
      />
      <Twitter
        title={title}
        description={description}
        image={twitterCover}
        imageAlt={coverAlt}
        creator={twitterHandle}
      />
    </>
  )
}

export default Head
