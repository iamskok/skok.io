import React, { useState } from 'react'
import prismThemes from '../../prism/themes'

const {
  Provider: PrismThemeProvider,
  Consumer: PrismThemeConsumer
} = React.createContext({}); 

const {
  modes: prismModes = {}
} = prismThemes

const themeKeys = Object.keys(prismModes).sort()

const PrismTheme = ({ children }) => {
  let currentPrismTheme = prismThemes
  let prismThemeName = window.localStorage.getItem('prismTheme')
  if (prismThemeName) {
    currentPrismTheme = prismThemes.modes[prismThemeName]
  }

  const [prismTheme, setPrismTheme] = useState(currentPrismTheme)

  const changePrismTheme = () => {
    let index = -1
    for (let i = 0; i < themeKeys.length; i++) {
      if (prismModes[themeKeys[i]] === prismTheme) {
        index = i
        break
      }
    }

    let newPrismTheme = prismThemes

    if (index < themeKeys.length - 1) {
      newPrismTheme = prismModes[themeKeys[index + 1]]
      window.localStorage.setItem('prismTheme', themeKeys[index + 1])
    } else {
      window.localStorage.removeItem('prismTheme')
    }

    setPrismTheme(newPrismTheme)
  }

  return (
    <PrismThemeProvider
      value={{
        prismTheme,
        changePrismTheme
      }}
    >
      {children}
    </PrismThemeProvider>
  )
}

export default PrismTheme
export {
  PrismThemeConsumer,
  PrismThemeProvider
}