// 100 and 100i
import interThinWoff from './Inter-Thin-subset.woff'
import interThinWoff2 from './Inter-Thin-subset.woff2'
import interThinItalicWoff from './Inter-ThinItalic-subset.woff'
import interThinItalicWoff2 from './Inter-ThinItalic-subset.woff2'
// 200 and 200i
import interExtraLightWoff from './Inter-ExtraLight-subset.woff'
import interExtraLightWoff2 from './Inter-ExtraLight-subset.woff2'
import interExtraLightItalicWoff from './Inter-ExtraLightItalic-subset.woff'
import interExtraLightItalicWoff2 from './Inter-ExtraLightItalic-subset.woff2'
// 300 and 300i
import interLightWoff from './Inter-Light-subset.woff'
import interLightWoff2 from './Inter-Light-subset.woff2'
import interLightItalicWoff from './Inter-LightItalic-subset.woff'
import interLightItalicWoff2 from './Inter-LightItalic-subset.woff2'
// 400 and 400i
import interRegularWoff from './Inter-Regular-subset.woff'
import interRegularWoff2 from './Inter-Regular-subset.woff2'
import interItalicWoff from './Inter-Italic-subset.woff'
import interItalicWoff2 from './Inter-Italic-subset.woff2'
// 500 and 500i
import interMediumWoff from './Inter-Medium-subset.woff'
import interMediumWoff2 from './Inter-Medium-subset.woff2'
import interMediumItalicWoff from './Inter-MediumItalic-subset.woff'
import interMediumItalicWoff2 from './Inter-MediumItalic-subset.woff2'
// 600 and 600i
import interSemiBoldWoff from './Inter-SemiBold-subset.woff'
import interSemiBoldWoff2 from './Inter-SemiBold-subset.woff2'
import interSemiBoldItalicWoff from './Inter-SemiBoldItalic-subset.woff'
import interSemiBoldItalicWoff2 from './Inter-SemiBoldItalic-subset.woff2'
// 700 and 700i
import interBoldWoff from './Inter-Bold-subset.woff'
import interBoldWoff2 from './Inter-Bold-subset.woff2'
import interBoldItalicWoff from './Inter-BoldItalic-subset.woff'
import interBoldItalicWoff2 from './Inter-BoldItalic-subset.woff2'
// 800 and 800i
import interExtraBoldWoff from './Inter-ExtraBold-subset.woff'
import interExtraBoldWoff2 from './Inter-ExtraBold-subset.woff2'
import interExtraBoldItalicWoff from './Inter-ExtraBoldItalic-subset.woff'
import interExtraBoldItalicWoff2 from './Inter-ExtraBoldItalic-subset.woff2'
// 900 and 900i
import interBlackWoff from './Inter-Black-subset.woff'
import interBlackWoff2 from './Inter-Black-subset.woff2'
import interBlackItalicWoff from './Inter-BlackItalic-subset.woff'
import interBlackItalicWoff2 from './Inter-BlackItalic-subset.woff2'
// Single axis variable
import interVarItalicWoff2 from './Inter-VarItalic-subset.woff2'
import interVarRomanWoff2 from './Inter-VarRoman-subset.woff2'
// Variable experimental
// import interVarWoff2 from './Inter.var.woff2'
import interVarExperimentalWoff2 from './Inter-VarExperimental-subset.woff2'
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
      url(${interVarRomanWoff2}) format("woff2");
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
      url(${interVarItalicWoff2}) format("woff2");
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
      url(${interVarExperimentalWoff2}) format("woff2");
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