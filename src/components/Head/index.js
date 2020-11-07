import React from "react"
import Title from "./Title"
import Description from "./Description"
import PreloadLinks from "./PreloadLinks"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"

const Head = ({
  url,
  title,
  description,
  covers,
  coverAlt,
  socialMedia,
  date,
  language,
  firstName,
  lastName,
  pages: {
    home: { title: siteName },
  },
  isPage,
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
        url={url}
        title={title}
        description={description}
        image={facebookCover}
        imageAlt={coverAlt}
        publishedTime={date}
        siteName={siteName}
        firstName={firstName}
        lastName={lastName}
        locale={language}
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
