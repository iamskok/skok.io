/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { useState, useEffect, useCallback, Fragment } from 'react'
import theme from '../gatsby-plugin-theme-ui'
import components from '../gatsby-plugin-theme-ui/components'
import useEventListener from '../hooks/use-event-listener'

const themeUI = { ...theme }
const { fonts: { safe: safeFonts } } = { ...theme }
const safeFontsTheme = {
  ...Object.assign(
    {},
    theme,
    { fonts: safeFonts }
  )
}

const ThemeUIProvider = ({ element }) => {
  const [theme, setTheme] = useState(safeFontsTheme)

  const updateTheme = useCallback(
    () => {
      setTheme(themeUI)
      document.documentElement.classList.remove(
        `font-loading-stage-1`,
        `font-loading-stage-2`
      )
    },
    [setTheme],
  )

  useEventListener(
    typeof window !== 'undefined' && window,
    'FONTS_ARE_LOADED',
    updateTheme
  )

  useEffect(() => {
    updateTheme()
    sessionStorage.getItem('areFontsLoaded')
  }, [updateTheme])

  return (
    <Fragment>
      {jsx(ThemeProvider, {
        theme,
        components,
      },
        element
      )}
    </Fragment>
  )
}

export default ThemeUIProvider