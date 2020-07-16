import React from "react"
import { Helmet } from "react-helmet"
import amstelvarRomanWoff2 from "../fonts/amstelvar/amstelvar-roman-subset.woff2"
import amstelvarItalicWoff2 from "../fonts/amstelvar/amstelvar-italic-subset.woff2"
import interWoff2 from "../fonts/inter/inter-subset.woff2"
import firaCodeWoff2 from "../fonts/fira-code/fira-code-subset.woff2"
import amstelvarFontFaces from "../fonts/amstelvar"
import interFontFace from "../fonts/inter"
import firaCodeFontFace from "../fonts/fira-code"
import fonts from "../theme/styles/fonts"
import pageHeight from "../theme/styles/page-height"
import fontObserver from "../utils/font-observer"
import useSiteMetadata from "../hooks/use-site-metadata"

const Head = props => {
  const { title, description, author } = useSiteMetadata()

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description || props.description}
      />
      <meta name='og:title' content={title || props.title} />
      <meta
        name='og:description'
        content={description || props.description}
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title || props.title} />
      <meta
        name='twitter:description'
        content={description || props.description}
      />
      <meta name='twitter:creator' content={author || props.author} />
      <script>
        {` document.documentElement.classList.add('font-loading-stage-1') `}
      </script>
      <link
        href={amstelvarRomanWoff2}
        as='font'
        type='font/woff2'
        rel='preload'
        crossOrigin='anonymous'
      />
      <link
        href={amstelvarItalicWoff2}
        as='font'
        type='font/woff2'
        rel='preload'
        crossOrigin='anonymous'
      />
      <link
        href={interWoff2}
        as='font'
        type='font/woff2'
        rel='preload'
        crossOrigin='anonymous'
      />
      <link
        href={firaCodeWoff2}
        as='font'
        type='font/woff2'
        rel='preload'
        crossOrigin='anonymous'
      />
      <style type='text/css' name='font-faces'>
        {`
          ${amstelvarFontFaces}
          ${interFontFace}
          ${firaCodeFontFace}
        `}
      </style>
      <style type='text/css' name='font-size'>
        {` html { font-size: 125%; } `}
      </style>
      <style type='text/css' name='font-loading-stage'>
        {` ${fonts} `}
      </style>
      <style name='page-height'>{` ${pageHeight} `}</style>
      <script name='font-face-observer'>
        {` window.addEventListener('load', ${fontObserver}) `}
      </script>
    </Helmet>
  )
}

export default Head
