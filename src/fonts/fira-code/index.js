import firaCodeVF from './fira-code-vf-subset.woff2'

const firaCode = `
  @font-face {
    font-family: 'Fira Code VF';
    font-weight: 300 700;
    font-display: swap;
    font-style: normal;
    src: url(${firaCodeVF}) format('woff2-variations'),
      url(${firaCodeVF}) format('woff2');
  }
`

export default firaCode