import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import interSubset from '../fonts/inter/inter-var-critical-subset.woff2'
import inter from '../fonts/inter'
import firaCode from '../fonts/fira-code'

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
        href={interSubset}
        as="font"
        type="font/woff2"
        rel="preload"
        crossorigin="anonymous"
      />
      <style type="text/css">
        {`
          ${inter}
          ${firaCode}

          body {
            font-family: system-ui, sans-serif;
          }

          .fonts-stage-2 body {
            font-family: 'Inter var';
          }

          .fonts-stage-2 pre,
          .fonts-stage-2 code {
            font-family: 'Fira Code VF';
          }
        `}
      </style>
    </Helmet>
  )
}
