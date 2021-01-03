import React from "react"
import { Global } from "@emotion/core"
import fontFaces from "../../gatsby-plugin-theme-ui/fontFaces"
import breakpoints from "../../gatsby-plugin-theme-ui/tokens/breakpoints"

const styles = `
  ${fontFaces}

  html {
    font-size: 125%;
    height: 100%;
    overflow-y: scroll;
  }

  @media (min-width: ${breakpoints[0]}) {
    html {
      font-size: 150%;
    }
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`

const GlobalStyles = () => <Global styles={styles} />

export default GlobalStyles
