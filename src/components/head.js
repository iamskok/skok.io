import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
// import amstelvarWoff2 from '../fonts/amstelvar/amstelvar-subset.woff2'
import amstelvarRomanWoff2 from '../fonts/amstelvar/amstelvar-roman-subset.woff2'
import amstelvarItalicWoff2 from '../fonts/amstelvar/amstelvar-italic-subset.woff2'
import interWoff2 from '../fonts/inter/inter-subset.woff2'
import firaCodeWoff2 from '../fonts/fira-code/fira-code-vf-subset.woff2'
import amstelvarFontFaces from '../fonts/amstelvar'
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
      <link
        href={amstelvarRomanWoff2}
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
        href={interWoff2}
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
          ${amstelvarFontFaces}
          ${interFontFace}
          ${firaCodeFontFace}

          html {
            font-size: 125%;
          }

          .font-loading-stage-1 body {
            font-family: -apple-system, system-ui, sans-serif;
          }

          .font-loading-stage-2 h1,
          .font-loading-stage-2 h2,
          .font-loading-stage-2 h3,
          .font-loading-stage-2 h4,
          .font-loading-stage-2 h5,
          .font-loading-stage-2 h6 {
            font-family: 'Amstelvar';
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
                  document.fonts.load('400 1em "Amstelvar"'),
                  document.fonts.load('italic 400 1em "Amstelvar"'),
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
