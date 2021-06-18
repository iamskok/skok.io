import React from "react"
import { Global } from "@emotion/core"
import { useThemeUI } from "theme-ui"
import fontFaces from "../../gatsby-plugin-theme-ui/fontFaces"

const GlobalStyles = () => {
  const {
    theme: {
      breakpoints: [tablet],
      colors: { accent },
    },
  } = useThemeUI()

  return (
    <Global
      styles={[
        ...fontFaces,
        {
          "*": {
            "&:focus": {
              outline: 0,
            },
            "&:focus-visible": {
              outline: 0,
              "&:not(#gatsby-focus-wrapper)": {
                boxShadow: `0 0 0 2px ${accent}`,
              },
            },
          },
          html: {
            fontSize: `125%`,
            // Prevent scrollbar from repositioning web page
            paddingLeft: `calc(100vw - 100%)`,
            // Fixes font size issue in `CodeBlock` component on iOS
            // https://stackoverflow.com/a/22417120/3614631
            textSizeAdjust: `none`,
            [`@media (min-width: ${tablet})`]: {
              fontSize: `150%`,
            },
          },
          "html, body, #___gatsby, #gatsby-focus-wrapper": {
            height: `100%`,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
