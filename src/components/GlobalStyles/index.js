import React from "react"
import { Global } from "@emotion/core"
import { useThemeUI } from "theme-ui"
import fontFaces from "../../gatsby-plugin-theme-ui/fontFaces"

const GlobalStyles = () => {
  const {
    theme: {
      colors: { accent: accentColor },
      breakpoints: [tablet],
      radii: [, borderRadiusSm, borderRadiusMd],
    },
  } = useThemeUI()

  return (
    <Global
      styles={[
        ...fontFaces,
        {
          "*:focus": {
            outline: 0,
            boxShadow: `0 0 0 2px ${accentColor}`,
            borderRadius: borderRadiusMd,
            transition: `box-shadow 200ms ease`,
          },
          "a, button": {
            "&:focus": {
              boxShadow: `0 0 0 2px ${accentColor}`,
              borderRadius: borderRadiusSm,
              transition: `box-shadow 200ms ease`,
            },
          },
          html: {
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
          "#gatsby-focus-wrapper": {
            boxShadow: `none`,
          },
        },
      ]}
    />
  )
}

export default GlobalStyles
