/** @jsx jsx */
import {
  jsx,
  ThemeProvider,
} from 'theme-ui'
import { useState, useEffect, useCallback, Fragment } from 'react'
import PrismThemeProvider from './code-block/prism-theme-provider'
import theme from '../gatsby-plugin-theme-ui'
import components from '../gatsby-plugin-theme-ui/components'
import useEventListener from '../hooks/use-event-listener'

const { fonts: { safe: safeFonts } } = { ...theme }
const safeFontsTheme = {
  ...Object.assign(
    {},
    theme,
    { fonts: safeFonts }
  )
}
const themeUI = {...theme}

const ThemeUIProvider = ({ element }) => {
  const [theme, setTheme] = useState(safeFontsTheme)
  const updateTheme = useCallback(
    () => {
      setTheme(themeUI)
      document.documentElement.classList.remove('fonts-stage-1')
      document.documentElement.classList.remove('fonts-stage-2')
    },
    [setTheme],
  )

  typeof window !== 'undefined' &&
  useEventListener(window, 'fontsLoaded', updateTheme)

  useEffect(() => {
    sessionStorage.getItem('fontsLoaded') &&
    updateTheme()
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

export const wrapRootElement = ({ element }) => (
  <PrismThemeProvider>
    <ThemeUIProvider element={element} />
  </PrismThemeProvider>
)
