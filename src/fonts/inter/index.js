import inter from './inter-subset.woff2'

const interFontFace = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: oblique 0deg 10deg;
    src: url(${inter}) format('woff2-variations'),
      url(${inter}) format('woff2');
  }
`

export default interFontFace