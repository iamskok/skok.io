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
      <script id="connection-type-checker">
        {`
          (() => {
            const isSaveData = navigator.connection &&
              navigator.connection.saveData
            const connectionType = navigator.connection &&
              navigator.connection.effectiveType
            const isSlowConnectionType = ['slow-2g', '2g', '3g',]
              .indexOf(connectionType) === -1 ? false : true

            if (!isSlowConnectionType && !isSaveData) {
              // const inter = document.getElementById('inter')
              // const interItalic = document.getElementById('inter-italic')
              // const firaCode = document.getElementById('fira-code')

              // inter.setAttribute('media', 'all')
              // interItalic.setAttribute('media', 'all')
              // firaCode.setAttribute('media', 'all')

              const inter = document.createElement('link')
              const interItalic = document.createElement('link')
              const firaCode = document.createElement('link')

              inter.as = 'font'
              inter.type = 'font/woff2'
              inter.rel = 'preload'
              inter.crossOrigin = 'anonymous'
              inter.href='${interWoff2}'

              interItalic.as = 'font'
              interItalic.type = 'font/woff2'
              interItalic.rel = 'preload'
              interItalic.crossOrigin = 'anonymous'
              interItalic.href='${interItalicWoff2}'

              firaCode.as = 'font'
              firaCode.type = 'font/woff2'
              firaCode.rel = 'preload'
              firaCode.crossOrigin = 'anonymous'
              firaCode.href='${firaCodeWoff2}'

              const insertAfter = (newNode, referenceNode) => referenceNode
                .parentNode.insertBefore(newNode, referenceNode.nextSibling)

              const target = document.getElementById('connection-type-checker')

              insertAfter(inter, target)
              insertAfter(interItalic, target)
              insertAfter(firaCode, target)
            }
          })()
        `}
      </script>
      {/* <link
        id="inter"
        href={interWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
        media="print"
      />
      <link
        id="inter-italic"
        href={interItalicWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
        media="print"
      />
      <link
        id="fira-code"
        href={firaCodeWoff2}
        as="font"
        type="font/woff2"
        rel="preload"
        crossOrigin="anonymous"
        media="print"
      /> */}
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
              const isSaveData = navigator.connection &&
                navigator.connection.saveData
              const connectionType = navigator.connection &&
                navigator.connection.effectiveType
              const isSlowConnectionType = ['slow-2g', '2g', '3g',]
                .indexOf(connectionType) === -1 ? false : true

              if ('fonts' in document && !isSaveData && !isSlowConnectionType) {
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
