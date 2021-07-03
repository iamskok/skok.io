import { useEffect } from "react"
import isBrowser from "../utils/is-browser"

const useStyleSheet = (selector, rule) => {
  const styleSheet = isBrowser() && document.styleSheets[0]
  const [[property, value]] = Object.entries(rule)
  const cssStyleRule = `
    ${selector} {
      ${property}: ${value};
    }
  `

  useEffect(() => {
    styleSheet.insertRule(cssStyleRule)

    return () => styleSheet.deleteRule(0)
  }, [styleSheet, cssStyleRule])
}

export default useStyleSheet
