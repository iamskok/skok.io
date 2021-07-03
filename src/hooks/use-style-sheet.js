import { useEffect } from "react"

const useStyleSheet = (selector, rules) => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0]
    const rulesList = Object.entries(rules)
    const cssStyleRule = `
        ${selector} {
          ${rulesList
            .map(([property, value]) => `${property}: ${value};`)
            .join(`\n`)}
        }
      `
    styleSheet.insertRule(cssStyleRule)

    return () => styleSheet.deleteRule(0)
  }, [rules, selector])
}

export default useStyleSheet
