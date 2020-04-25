import colors from './colors'
import fontSizes from './fontSizes'
import styles from './styles'

const theme = {
  colors,
  fontSizes,
  styles,
  fonts: {
    body: `'Inter var'`,
    heading: `'Inter var'`,
    monospace: `'Fira Code VF'`,
    safe: {
      body: `system-ui, -apple-system, sans-serif`,
      heading: `system-ui, -apple-system, sans-serif`,
      monospace: `monospace`,
    }
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  sizes: {
    container: 768,
  },
}

export default theme
