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
  console.log('currentTheme2', theme.fonts.body)

  // const updateTheme = () => {
  //   setTheme(themeUI)
  //   document.documentElement.classList.remove('fonts-stage-1')
  //   document.documentElement.classList.remove('fonts-stage-2')
  //   console.log('set theme fired')
  // }
  const updateTheme = useCallback(
    () => {
      setTheme(themeUI)
      document.documentElement.classList.remove('fonts-stage-1')
      document.documentElement.classList.remove('fonts-stage-2')
      console.log('set theme fired')
    },
    [setTheme],
  )

  typeof window !== 'undefined' &&
  useEventListener(window, 'fontsLoaded', updateTheme)

  useEffect(() => {
    sessionStorage.getItem('fontsLoaded') &&
    updateTheme()
  }, [updateTheme])

  console.log('currentTheme4', theme.fonts.body)

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

export const wrapRootElement = ({ element }) => {
  return (
    <PrismThemeProvider>
      <ThemeUIProvider element={element} />
    </PrismThemeProvider>
  )
}
