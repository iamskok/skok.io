import colors from './colors'
import styles from './styles'

const theme = {
  initialColorMode: 'light',
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    bodyStatic: `'Inter', system-ui, sans-serif`,
    bodyVariable: `'Inter var experimental', system-ui, sans-serif`,
    heading: 'system-ui, sans-serif',
    headingStatic: `'Inter', system-ui, sans-serif`,
    headingVariable: `'Inter var experimental', system-ui, sans-serif`,
    monospace: 'Menlo, monospace',
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
