import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import interWoff2 from '../fonts/inter/inter-var-subset.woff2'
import interItalicWoff2 from '../fonts/inter/inter-var-italic-subset.woff2'
import firaCodeWoff2 from '../fonts/fira-code/fira-code-vf-subset.woff2'

import interFontFace from '../fonts/inter'
import firaCodeFontFace from '../fonts/fira-code'

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
      <link
        href={interWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <link
        href={interItalicWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <link
        href={firaCodeWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
      />
      <style type="text/css">
        {`
          ${interFontFace}
          ${firaCodeFontFace}

          body {
            font-family: system-ui, sans-serif;
          }

          .fonts-loaded body {
            font-family: 'Inter var';
            fontFeatureSettings: "'kern', 'calt', 'ss01', 'ss02', 'ss03'",
          }

          .fonts-loaded pre,
          .fonts-loaded code {
            font-family: 'Fira Code VF';
            fontFeatureSettings: "'salt', 'calt', 'case', 'cpsp', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06'",
          }
        `}
      </style>
    </Helmet>
  )
}
