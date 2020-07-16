import firaCodeWoff2 from "./fira-code-subset.woff2"

const firaCodeFontFace = `
  @font-face {
    font-family: 'Fira Code VF';
    font-weight: 300 700;
    font-display: swap;
    font-style: normal;
    src: url(${firaCodeWoff2}) format('woff2-variations'),
      url(${firaCodeWoff2}) format('woff2');
  }
`

export default firaCodeFontFace
