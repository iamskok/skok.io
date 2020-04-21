/** @jsx jsx */
import {
  jsx,
  ThemeProvider,
} from 'theme-ui'
import React, { useState, useEffect } from 'react'
import PrismThemeProvider from './code-block/prism-theme-provider'
import theme from '../gatsby-plugin-theme-ui'
import components from '../gatsby-plugin-theme-ui/components'

const { fonts: { safe: safeFonts } } = { ...theme }
const safeFontsTheme = {
  ...Object.assign(
    {},
    theme,
    { fonts: safeFonts }
  )
}

const Wrapper = ({ element }) => {
  const [currentTheme, setCurrentTheme] = useState(safeFontsTheme)

  useEffect(() => {
    typeof sessionStorage !== 'undefined' &&
    sessionStorage.getItem('fontsLoaded') &&
    setCurrentTheme(theme)
  })

  return (
    <>
      {jsx(ThemeProvider, {
        theme: currentTheme,
        components,
      },
        element
      )}
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <PrismThemeProvider>
      <Wrapper element={element} />
    </PrismThemeProvider>
  )
}
