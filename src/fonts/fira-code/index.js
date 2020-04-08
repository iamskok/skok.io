// 300
import firaCodeLightWoff2 from './FiraCode-Light.woff2'
import firaCodeLightWoff from './FiraCode-Light.woff'
// 400
import firaCodeRegularWoff2 from './FiraCode-Regular.woff2'
import firaCodeRegularWoff from './FiraCode-Regular.woff'
// 500
import firaCodeMediumWoff2 from './FiraCode-Medium.woff2'
import firaCodeMediumWoff from './FiraCode-Medium.woff'
// 600
import firaCodeSemiBoldWoff2 from './FiraCode-Retina.woff2'
import firaCodeSemiBoldWoff from './FiraCode-Retina.woff'
// 700
import firaCodeBoldWoff2 from './FiraCode-Bold.woff2'
import firaCodeBoldWoff from './FiraCode-Bold.woff'
// Variable
import firaCodeVFWoff2 from './FiraCode-VF.woff2'
import firaCodeVFWoff from './FiraCode-VF.woff'

const firaCode300 = `
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${firaCodeLightWoff2}) format('woff2'),
      url(${firaCodeLightWoff}) format('woff');
  }
`

const firaCode400 = `
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${firaCodeRegularWoff2}) format('woff2'),
      url(${firaCodeRegularWoff}) format('woff');
  }
`

const firaCode500 = `
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${firaCodeMediumWoff2}) format('woff2'),
      url(${firaCodeMediumWoff}) format('woff');
  }
`

const firaCode600 = `
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${firaCodeSemiBoldWoff2}) format('woff2'),
      url(${firaCodeSemiBoldWoff}) format('woff');
  }
`

const firaCode700 = `
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${firaCodeBoldWoff2}) format('woff2'),
      url(${firaCodeBoldWoff}) format('woff');
  }
`

const firaCodeVF = `
  @font-face {
    font-family: 'Fira Code VF';
    font-weight: 300 700;
    font-display: swap;
    font-style: normal;
    src: url(${firaCodeVFWoff2}) format('woff2-variations'),
      url(${firaCodeVFWoff2}) format('woff2'),
      url(${firaCodeVFWoff}) format('woff-variations'),
      url(${firaCodeVFWoff}) format('woff-variations');
  }
`

const firaCodeFontFaceStack = (
  firaCode300 +
  firaCode400 +
  firaCode500 +
  firaCode600 +
  firaCode700 +
  firaCodeVF
)

console.log('firaCodeFontFaceStack', firaCodeFontFaceStack)

export default firaCodeFontFaceStack