import amstelvarWoff2 from "./amstelvar.woff2"
import amstelvarItalicWoff2 from "./amstelvar-italic.woff2"

const amstelvarRomanFontFace = `
  @font-face {
    font-family: 'Amstelvar';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: url(${amstelvarWoff2}) format('woff2-variations'),
      url(${amstelvarWoff2}) format('woff2');
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
