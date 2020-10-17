import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import PreloadLinks from "./PreloadLinks"
import Script from "./Script"
import MetaTags from "./MetaTags"

const Head = () => {
  const { title, description, author } = useSiteMetadata()

  return (
    <>
      <Title>{title}</Title>
      <PreloadLinks />
      {/* <Script /> */}
      <MetaTags title={title} description={description} author={author} />
    </>
  )
}

export default Head
