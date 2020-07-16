import amstelvarRomanWoff2 from "./amstelvar-roman-subset.woff2"
import amstelvarItalicWoff2 from "./amstelvar-italic-subset.woff2"

const amstelvarRomanFontFace = `
  @font-face {
    font-family: 'Amstelvar';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: url(${amstelvarRomanWoff2}) format('woff2-variations'),
      url(${amstelvarRomanWoff2}) format('woff2');
  }
`

const amstelvarItalicFontFace = `
  @font-face {
    font-family: 'Amstelvar';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    src: url(${amstelvarItalicWoff2}) format('woff2-variations'),
      url(${amstelvarItalicWoff2}) format('woff2');
  }
`

const amstelvarFontFaces = amstelvarRomanFontFace + amstelvarItalicFontFace

export default amstelvarFontFaces
