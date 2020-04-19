import React from 'react'
// import { useThemeUI } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index'

const REGEX_KEY = /Safe$/

const isBrowser = () => typeof window !== 'undefined'

const FOUTContext = React.createContext({})

const FOUTProvider = ({ children }) => {
  const themeUI = {...theme}
  const { fonts } = themeUI
  const safeFonts = Object.fromEntries(
    Object.entries(fonts)
      .filter(f => f[0].match(REGEX_KEY))
      .map(f => [f[0].replace(REGEX_KEY, ''), f[1]])
  )
  const safeFontsThemeUI = {...themeUI}
  safeFontsThemeUI.fonts = safeFonts

  return (
    <FOUTContext.Provider
      value={
        isBrowser() &&
        sessionStorage.getItem('fontsLoaded') === true ?
        themeUI :
        safeFontsThemeUI
      }
    >
      {children}
    </FOUTContext.Provider>
  )
}

const FOUTConsumer = ({ children }) => (
  <FOUTContext.Consumer>
    {children}
  </FOUTContext.Consumer>
)

export default FOUTProvider
export { FOUTConsumer }