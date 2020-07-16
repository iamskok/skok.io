import React, { useState, useEffect } from "react"
import prismThemes from "../../prism/themes"

const LOCAL_STORAGE_KEY = `prism-theme-name`

const isBrowser = () => typeof window !== "undefined"

const {
  Provider: PrismThemeProvider,
  Consumer: PrismThemeConsumer,
} = React.createContext({})

const { modes: prismModes = {} } = prismThemes

const themeKeys = Object.keys(prismModes).sort()

const PrismTheme = ({ children }) => {
  let currentPrismTheme = prismThemes
  const [prismTheme, setPrismTheme] = useState(currentPrismTheme)

  useEffect(() => {
    const prismThemeName = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    if (prismThemeName) {
      setPrismTheme(prismThemes.modes[prismThemeName])
    }
  }, [setPrismTheme])

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
      if (isBrowser()) {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, themeKeys[index + 1])
      }
    } else {
      if (isBrowser()) {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY)
      }
    }

    setPrismTheme(newPrismTheme)
  }

  return (
    <PrismThemeProvider
      value={{
        prismTheme,
        changePrismTheme,
      }}
    >
      {children}
    </PrismThemeProvider>
  )
}

export default PrismTheme
export { PrismThemeConsumer, PrismThemeProvider }
