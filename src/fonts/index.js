import {
  // 100 and 100i
  interThinWoff,
  interThinWoff2,
  interThinItalicWoff,
  interThinItalicWoff2,
  // 200 and 200i
  interExtraLightWoff,
  interExtraLightWoff2,
  interExtraLightItalicWoff,
  interExtraLightItalicWoff2,
  // 300 and 300i
  interLightWoff,
  interLightWoff2,
  interLightItalicWoff,
  interLightItalicWoff2,
  // 400 and 400i
  interRegularWoff,
  interRegularWoff2,
  interItalicWoff,
  interItalicWoff2,
  // 500 and 500i
  interMediumWoff,
  interMediumWoff2,
  interMediumItalicWoff,
  interMediumItalicWoff2,
  // 600 and 600i
  interSemiBoldWoff,
  interSemiBoldWoff2,
  interSemiBoldItalicWoff,
  interSemiBoldItalicWoff2,
  // 700 and 700i
  interBoldWoff,
  interBoldWoff2,
  interBoldItalicWoff,
  interBoldItalicWoff2,
  // 800 and 800i
  interBlackWoff,
  interBlackWoff2,
  interBlackItalicWoff,
  interBlackItalicWoff2,
  // 900 and 900i
  interExtraBoldWoff,
  interExtraBoldWoff2,
  interExtraBoldItalicWoff,
  interExtraBoldItalicWoff2,
  // variable
  interItalicVarWoff2,
  interRomanVarWoff2,
  // variable experimental
  interVarWoff2,
  // interVvarWoff2,
} from './inter/inter'


const inter100 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Inter Thin'),
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
    src: local('Inter Thin'),
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
    src: url(${interExtraLightWoff2}) format("woff2"),
      url(${interExtraLightWoff}) format("woff");
  }
`
const inter200i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url(${interExtraLightItalicWoff2}) format("woff2"),
      url(${interExtraLightItalicWoff}) format("woff");
  }
`

const inter300 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${interLightWoff2}) format("woff2"),
      url(${interLightWoff}) format("woff");
  }
`

const inter300i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(${interLightItalicWoff2}) format("woff2"),
      url(${interLightItalicWoff}) format("woff");
  }
`

const inter400 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${interRegularWoff2}) format("woff2"),
      url(${interRegularWoff}) format("woff");
  }
`

const inter400i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${interItalicWoff2}) format("woff2"),
      url(${interItalicWoff}) format("woff");
  }
`

const inter500 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${interMediumWoff2}) format("woff2"),
      url(${interMediumWoff}) format("woff");
  }
`
const inter500i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(${interMediumItalicWoff2}) format("woff2"),
      url(${interMediumItalicWoff}) format("woff");
  }
`

const inter600 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${interSemiBoldWoff2}) format("woff2"),
      url(${interSemiBoldWoff}) format("woff");
  }
`

const inter600i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(${interSemiBoldItalicWoff2}) format("woff2"),
      url(${interSemiBoldItalicWoff}) format("woff");
  }
`

const inter700 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${interBoldWoff2}) format("woff2"),
      url(${interBoldWoff}) format("woff");
  }
`

const inter700i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(${interBoldItalicWoff2}) format("woff2"),
      url(${interBoldItalicWoff}) format("woff");
  }
`
const inter800 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${interExtraBoldWoff2}) format("woff2"),
      url(${interExtraBoldWoff}) format("woff");
  }
`

const inter800i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(${interExtraBoldItalicWoff2}) format("woff2"),
      url(${interExtraBoldItalicWoff}) format("woff");
  }
`

const inter900 = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(${interBlackWoff2}) format("woff2"),
      url(${interBlackWoff}) format("woff");
  }
`
const inter900i = `
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(${interBlackItalicWoff2}) format("woff2"),
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
    src: url(${interRomanVarWoff2}) format("woff2");
  }
`

const interVariableItalic = `
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: 'Italic';
    src: url(${interItalicVarWoff2}) format("woff2");
  }
`

const interVariableExperimental = `
  @font-face {
    font-family: 'Inter var experimental';
    font-weight: 100 900;
    font-display: swap;
    font-style: oblique 0deg 10deg;
    src: url(${interVarWoff2}) format("woff2");
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