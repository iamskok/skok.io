// 100 and 100i
import interThinWoff from './Inter-Thin.woff'
import interThinWoff2 from './Inter-Thin.woff2'
import interThinItalicWoff from './Inter-ThinItalic.woff'
import interThinItalicWoff2 from './Inter-ThinItalic.woff2'
// 200 and 200i
import interExtraLightWoff from './Inter-ExtraLight.woff'
import interExtraLightWoff2 from './Inter-ExtraLight.woff2'
import interExtraLightItalicWoff from './Inter-ExtraLightItalic.woff'
import interExtraLightItalicWoff2 from './Inter-ExtraLightItalic.woff2'
// 300 and 300i
import interLightWoff from './Inter-Light.woff'
import interLightWoff2 from './Inter-Light.woff2'
import interLightItalicWoff from './Inter-LightItalic.woff'
import interLightItalicWoff2 from './Inter-LightItalic.woff2'
// 400 and 400i
import interRegularWoff from './Inter-Regular.woff'
import interRegularWoff2 from './Inter-Regular.woff2'
import interItalicWoff from './Inter-Italic.woff'
import interItalicWoff2 from './Inter-Italic.woff2'
// 500 and 500i
import interMediumWoff from './Inter-Medium.woff'
import interMediumWoff2 from './Inter-Medium.woff2'
import interMediumItalicWoff from './Inter-MediumItalic.woff'
import interMediumItalicWoff2 from './Inter-MediumItalic.woff2'
// 600 and 600i
import interSemiBoldWoff from './Inter-SemiBold.woff'
import interSemiBoldWoff2 from './Inter-SemiBold.woff2'
import interSemiBoldItalicWoff from './Inter-SemiBoldItalic.woff'
import interSemiBoldItalicWoff2 from './Inter-SemiBoldItalic.woff2'
// 700 and 700i
import interBoldWoff from './Inter-Bold.woff'
import interBoldWoff2 from './Inter-Bold.woff2'
import interBoldItalicWoff from './Inter-BoldItalic.woff'
import interBoldItalicWoff2 from './Inter-BoldItalic.woff2'
// 800 and 800i
import interExtraBoldWoff from './Inter-ExtraBold.woff'
import interExtraBoldWoff2 from './Inter-ExtraBold.woff2'
import interExtraBoldItalicWoff from './Inter-ExtraBoldItalic.woff'
import interExtraBoldItalicWoff2 from './Inter-ExtraBoldItalic.woff2'
// 900 and 900i
import interBlackWoff from './Inter-Black.woff'
import interBlackWoff2 from './Inter-Black.woff2'
import interBlackItalicWoff from './Inter-BlackItalic.woff'
import interBlackItalicWoff2 from './Inter-BlackItalic.woff2'
// Single axis variable
import interItalicVarWoff2 from './Inter-italic.var.woff2'
import interRomanVarWoff2 from './Inter-roman.var.woff2'
// Variable experimental
import interVarWoff2 from './Inter.var.woff2'
// import interVvarWoff2 from './Inter-V.var.woff2'

const inter100 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Inter Thin'),
      local('Inter-Thin'),
      url(${interThinWoff2}) format("woff2"),
      url(${interThinWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter100i = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Inter Thin Italic'),
      local('Inter-Thin-Italic'),
      url(${interThinItalicWoff2}) format("woff2"),
      url(${interThinItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter200 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local('Inter Extra Light'),
      local('Inter-Extra-Light'),
      url(${interExtraLightWoff2}) format("woff2"),
      url(${interExtraLightWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`
const inter200i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: local('Inter Extra Light Italic'),
      local('Inter-Extra-Light-Italic'),
      url(${interExtraLightItalicWoff2}) format("woff2"),
      url(${interExtraLightItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter300 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Inter Light'),
      local('Inter-Light'),
      url(${interLightWoff2}) format("woff2"),
      url(${interLightWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter300i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: local('Inter Light Italic'),
      local('Inter-Light-Italic'),
      url(${interLightItalicWoff2}) format("woff2"),
      url(${interLightItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter400 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Inter Regular'),
      local('Inter-Regular'),
      url(${interRegularWoff2}) format("woff2"),
      url(${interRegularWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter400i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Inter Italic'),
      local('Inter-Italic'),
      url(${interItalicWoff2}) format("woff2"),
      url(${interItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter500 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Inter Medium'),
      local('Inter-Medium'),
      url(${interMediumWoff2}) format("woff2"),
      url(${interMediumWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`
const inter500i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('Inter Italic'),
      local('Inter-Italic'),
      url(${interMediumItalicWoff2}) format("woff2"),
      url(${interMediumItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter600 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Inter Semi Bold'),
       local('Inter-Semi-Bold'),
      url(${interSemiBoldWoff2}) format("woff2"),
      url(${interSemiBoldWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter600i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: local('Inter Semi Bold Italic'),
      local('Inter-Semi-Bold-Italic'),
      url(${interSemiBoldItalicWoff2}) format("woff2"),
      url(${interSemiBoldItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter700 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Inter Bold'),
      local('Inter-Bold'),
      url(${interBoldWoff2}) format("woff2"),
      url(${interBoldWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter700i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('Inter Bold Italic'),
      local('Inter-Bold-Italic'),
      url(${interBoldItalicWoff2}) format("woff2"),
      url(${interBoldItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`
const inter800 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Inter Extra Bold'),
      local('Inter-Extra-Bold'),
      url(${interExtraBoldWoff2}) format("woff2"),
      url(${interExtraBoldWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter800i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: local('Inter Extra Bold Italic'),
      local('Inter-Extra-Bold-Italic'),
      url(${interExtraBoldItalicWoff2}) format("woff2"),
      url(${interExtraBoldItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const inter900 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Inter Black'),
      local('Inter-Black'),
      url(${interBlackWoff2}) format("woff2"),
      url(${interBlackWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`
const inter900i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: local('Inter Black Italic'),
      local('Inter-Black-Italic'),
      url(${interBlackItalicWoff2}) format("woff2"),
      url(${interBlackItalicWoff}) format("woff");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const interVariable = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: local('Inter Roman Variable'),
      local('Inter-Roman-Variable'),
      url(${interRomanVarWoff2}) format("woff2");
    unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const interVariableItalic = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: 'Italic';
    src: local('Inter Italic Variable'),
      local('Inter-Italic-Variable'),
      url(${interItalicVarWoff2}) format("woff2");
      unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const interVariableExperimental = `
  @font-face {
    font-family: 'Inter var experimental';
    font-weight: 100 900;
    font-display: swap;
    font-style: oblique 0deg 10deg;
    src: local('Inter Variable Experimental'),
      local('Inter-Variable-Experimental'),
      url(${interVarWoff2}) format("woff2");
      unicode-range: U+A,U+20-3E,U+40-7E,U+A9,U+2026;
  }
`

const interFontFaceStack = (
  inter100 +
  inter100i +
  inter200 +
  inter200i +
  inter300 +
  inter300i +
  inter400 +
  inter400i +
  inter500 +
  inter500i +
  inter600 +
  inter600i +
  inter700 +
  inter700i +
  inter800 +
  inter800i +
  inter900 +
  inter900i +
  interVariable +
  interVariableItalic +
  interVariableExperimental
)

export default interFontFaceStack