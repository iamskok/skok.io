// import amstelvar from './amstelvar-subset.woff2'
import amstelvarItalic from './amstelvar-subset.woff2'
import amstelvarRoman from './amstelvar-subset.woff2'

// const amstelvarFontFace = `
//   @font-face {
//     font-family: 'Amstelvar';
//     font-weight: 100 900;
//     font-display: swap;
//     src: url(${amstelvar}) format('woff2-variations'),
//       url(${amstelvar}) format('woff2');
//   }
// `

const roman = `
  @font-face {
    font-family: 'Amstelvar';
    font-weight: 100 900;
    font-display: swap;
    src: url(${amstelvarRoman}) format('woff2-variations'),
      url(${amstelvarRoman}) format('woff2');
  }
`

const italic = `
  @font-face {
    font-family: 'Amstelvar';
    font-weight: 100 900;
    font-display: swap;
    font-style: oblique 0deg 10deg;
    src: url(${amstelvarItalic}) format('woff2-variations'),
      url(${amstelvarItalic}) format('woff2');
  }
`

const amstelvarFontFaces = roman + italic

export default amstelvarFontFaces