import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Title from "./Title"
import PreloadLinks from "./PreloadLinks"
import MetaTags from "./MetaTags"

const Head = () => {
  const { title, description, author } = useSiteMetadata()

  return (
    <>
      <Title>{title}</Title>
      <PreloadLinks />
      <MetaTags title={title} description={description} author={author} />
    </>
  )
}

export default Head
