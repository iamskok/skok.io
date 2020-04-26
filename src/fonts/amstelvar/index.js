import amstelvar from './amstelvar-subset.woff2'

const amstelvarFontFace = `
  @font-face {
    font-family: 'Amstelvar';
    font-weight: 100 900;
    font-display: swap;
    src: url(${amstelvar}) format('woff2-variations'),
      url(${amstelvar}) format('woff2');
  }
`

export default amstelvarFontFace