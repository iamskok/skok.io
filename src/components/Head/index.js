import React from "react"
import { Helmet } from "react-helmet"
import amstelvarWoff2 from "../../fonts/amstelvar/amstelvar.woff2"
import amstelvarItalicWoff2 from "../../fonts/amstelvar/amstelvar-italic.woff2"
import interWoff2 from "../../fonts/inter/inter.woff2"
import dankMonoWoff2 from "../../fonts/dank-mono/dank-mono.woff2"
import dankMonoItalicWoff2 from "../../fonts/dank-mono/dank-mono-italic.woff2"
import amstelvarFontFaces from "../../fonts/amstelvar"
import interFontFace from "../../fonts/inter"
import dankMonoFontFaces from "../../fonts/dank-mono"
import fonts from "../../theme/styles/fonts"
import pageHeight from "../../theme/styles/page-height"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Head = props => {
  const { title, description, author } = useSiteMetadata()

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || props.description} />
      <meta name="og:title" content={title || props.title} />
      <meta name="og:description" content={description || props.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || props.title} />
      <meta
        name="twitter:description"
        content={description || props.description}
      />
      <meta name="twitter:creator" content={author || props.author} />
      <link
        href={amstelvarWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <link
        href={amstelvarItalicWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <link
        href={dankMonoWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <link
        href={dankMonoItalicWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <link
        href={interWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <style type="text/css" name="font-faces">
        {`
          ${amstelvarFontFaces}
          ${interFontFace}
          ${dankMonoFontFaces}
        `}
      </style>
      <style type="text/css" name="font-size">
        {`
          html {
            font-size: 125%;
          }
        `}
      </style>
      <style type="text/css" name="font-loading-stage">{`${fonts}`}</style>
      <style name="page-height">{`${pageHeight}`}</style>
    </Helmet>
  )
}

export default Head
