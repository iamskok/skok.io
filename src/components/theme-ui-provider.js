/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui"
import { useState, useEffect, useCallback, Fragment } from "react"
import theme from "../theme"
import components from "../theme/components"
import useEventListener from "../hooks/use-event-listener"

const themeUI = { ...theme }
const {
  fonts: { safe: safeFonts },
} = { ...theme }
const safeFontsTheme = {
  ...Object.assign({}, theme, { fonts: safeFonts }),
}

const ThemeUIProvider = ({ element }) => {
  const [theme, setTheme] = useState(safeFontsTheme)

  const updateTheme = useCallback(() => {
    setTheme(themeUI)
    document.documentElement.classList.remove(
      `font-loading-stage-1`,
      `font-loading-stage-2`
    )
  }, [setTheme])

  useEventListener(
    typeof window !== "undefined" && window,
    "FONTS_LOADED",
    updateTheme
  )

  useEffect(() => {
    updateTheme()
    sessionStorage.getItem("fontsLoaded")
  }, [updateTheme])

  return (
    <Fragment>
      {jsx(
        ThemeProvider,
        {
          theme,
          components,
        },
        element
      )}
    </Fragment>
  )
}

export default ThemeUIProvider
