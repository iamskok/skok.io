import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
// import interWoff2 from '../fonts/inter/Inter-VarRoman-subset.woff2'
import interFontFaceStack from '../fonts/inter'
import firaCodeFontFaceStack from '../fonts/fira-code'

const query = graphql`
  query HeadQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const useMetadata = () => {
  const data = useStaticQuery(query)
  return data.site.siteMetadata
}

export default props => {
  const meta = useMetadata()
  const title = props.title || meta.title
  const description = props.description || meta.description
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:creator' content={meta.author} />
      {/* <link
        href={interWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossorigin="anonymous"
      /> */}
      <style>
        {`
          ${interFontFaceStack}
          ${firaCodeFontFaceStack}
        `}
      </style>
    </Helmet>
  )
}
