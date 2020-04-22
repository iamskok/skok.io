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
      <script>
        {`document.documentElement.classList.add('font-loading-stage-1')`}
      </script>
      <style type="text/css">
        {`
          ${interFontFace}
          ${firaCodeFontFace}

          .font-loading-stage-1 body {
            font-family: system-ui, sans-serif;
          }

          .font-loading-stage-2 body {
            font-family: 'Inter var';
            font-feature-settings: 'kern', 'calt', 'ss01', 'ss02', 'ss03';
          }

          .font-loading-stage-2 pre,
          .font-loading-stage-2 code {
            font-family: 'Fira Code VF';
            font-feature-settings: 'salt', 'calt', 'case', 'cpsp', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06';
          }
        `}
      </style>
      <script>
        {`
          window.addEventListener('load', (() => {
            if (sessionStorage.areFontsLoaded) {
              document.documentElement.classList.add('font-loading-stage-2')
              return
            } else {
              if ('fonts' in document) {
                Promise.all([
                  document.fonts.load('400 1em "Inter var"'),
                  document.fonts.load('italic 400 1em "Inter var"'),
                  document.fonts.load('400 1em "Fira Code VF"')
                ]).then(() => {
                  document.documentElement.classList.add('font-loading-stage-2')

                  // Optimization for repeat views
                  sessionStorage.areFontsLoaded = true

                  // Dispatch event to notify ThemeUIProvider component
                  const fontsLoadedEvent = new CustomEvent('FONTS_ARE_LOADED')
                  window.dispatchEvent(fontsLoadedEvent)
                })
              }
            }
          })())
        `}
      </script>
    </Helmet>
  )
}
