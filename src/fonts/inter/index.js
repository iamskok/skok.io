import interCritical from './inter-critical-subset.woff2'
// import interCritical from './inter-critical-fat.woff2'
import interVar from './inter-var-subset.woff2'
import interVarItalic from './inter-var-italic-subset.woff2'

const critical = `
  @font-face {
    font-family: 'Inter critical';
    font-weight: 400;
    font-display: swap;
    font-style: normal;
    src: url(${interCritical}) format('woff2-variations'),
      url(${interCritical}) format('woff2');
    unicode-range: U+20-7E;
  }
`

const regular = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: url(${interVar}) format('woff2-variations'),
      url(${interVar}) format('woff2');
  }
`

const italic = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    src: url(${interVarItalic}) format('woff2-variations'),
      url(${interVarItalic}) format('woff2');
  }
`
const inter = (
  critical +
  regular +
  italic
)

export default inter