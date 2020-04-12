import colors from './colors'
import styles from './styles'

const theme = {
  initialColorMode: 'light',
  colors,
  fonts: {
    // body: `'Inter var', system-ui, sans-serif`,
    // bodyItalic: `'Inter var italic', system-ui, sans-serif`,
    // heading: `'Inter var', system-ui, sans-serif`,
    // monospace: `'Fira Code VF', monospace`,
    body: `system-ui, sans-serif`,
    bodyItalic: `system-ui, sans-serif`,
    heading: `system-ui, sans-serif`,
    monospace: `monospace`,
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
  styles,
}

export default theme
