import colors from './colors'
import styles from './styles'

const theme = {
  colors,
  styles,
  fonts: {
    body: `'Inter var'`,
    heading: `'Inter var'`,
    monospace: `'Fira Code VF'`,
    safe: {
      body: `system-ui, sans-serif`,
      heading: `system-ui, sans-serif`,
      monospace: `monospace`,
    }
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
}

export default theme
