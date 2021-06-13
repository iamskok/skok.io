import React from "react"
import { Global } from "@emotion/core"
import { useThemeUI } from "theme-ui"
import fontFaces from "../../gatsby-plugin-theme-ui/fontFaces"

const GlobalStyles = () => {
  const {
    theme: {
      colors: { accent: accentColor },
      breakpoints: [tablet],
    },
  } = useThemeUI()

  return (
    <Global
      styles={[
        ...fontFaces,
        {
          "*:focus": {
            outline: 0,
            "&:not(#gatsby-focus-wrapper)": {
              boxShadow: `0 0 0 2px ${accentColor}`,
              transition: `box-shadow 200ms ease`,
            },
          },
          html: {
            // Fix font size adjustment in `CodeBlock` component on iOS
            // https://stackoverflow.com/a/22417120/3614631
            textSizeAdjust: `none`,
            fontSize: `125%`,
            height: `100%`,
            overflowY: `scroll`,
            scrollBehavior: `smooth`,
            [`@media (min-width: ${tablet})`]: {
              fontSize: `150%`,
            },
          },
          "body, #___gatsby, #gatsby-focus-wrapper": {
            height: `100%`,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
