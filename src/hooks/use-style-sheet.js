import { useEffect } from "react"
import isWindow from "../utils/is-window"

const useStyleSheet = (selector, rule) => {
  const styleSheet = isWindow() && document.styleSheets[0]
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
