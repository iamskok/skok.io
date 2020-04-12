import interVar from './inter-var-subset.woff2'
import interVarItalic from './inter-var-italic-subset.woff2'

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
const interFontFace = (
  regular +
  italic
)

export default interFontFace