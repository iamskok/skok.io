import dankMonoWoff2 from "./dank-mono.woff2"
import dankMonoItalicWoff2 from "./dank-mono-italic.woff2"

const dankMonoFontFace = `
  @font-face {
    font-family: 'Dank Mono';
    font-display: swap;
    font-style: normal;
    src: url(${dankMonoWoff2}) format('woff2-variations'),
      url(${dankMonoWoff2}) format('woff2');
  }
`

const dankMonoItalicFontFace = `
  @font-face {
    font-family: 'Dank Mono';
    font-display: swap;
    font-style: italic;
    src: url(${dankMonoItalicWoff2}) format('woff2-variations'),
      url(${dankMonoItalicWoff2}) format('woff2');
  }
`

const dankMonoFontFaces = dankMonoFontFace + dankMonoItalicFontFace

export default dankMonoFontFaces
