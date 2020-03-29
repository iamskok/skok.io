import {
  interBlackWoff,
  interBlackWoff2,
  interBlackItalicWoff,
  interBlackItalicWoff2,
  interBoldWoff,
  interBoldWoff2,
  interBoldItalicWoff,
  interBoldItalicWoff2,
  interExtraBoldWoff,
  interExtraBoldWoff2,
  interExtraBoldItalicWoff,
  interExtraBoldItalicWoff2,
  interExtraLightWoff,
  interExtraLightWoff2,
  interExtraLightItalicWoff,
  interExtraLightItalicWoff2,
  interItalicWoff,
  interItalicWoff2,
  interLightWoff,
  interLightWoff2,
  interLightItalicWoff,
  interLightItalicWoff2,
  interMediumWoff,
  interMediumWoff2,
  interMediumItalicWoff,
  interMediumItalicWoff2,
  interRegularWoff,
  interRegularWoff2,
  interSemiBoldWoff,
  interSemiBoldWoff2,
  interSemiBoldItalicWoff,
  interSemiBoldItalicWoff2,
  interThinWoff,
  interThinWoff2,
  interThinItalicWoff,
  interThinItalicWoff2,
  interItalicVarWoff2,
  interVarWoff2,
  // interRomanVarWoff2,
  // interVvarWoff2,
} from './inter/inter'

const interFontFaceStack = `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(${interThinWoff2}) format("woff2"),
      url(${interThinWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url(${interThinItalicWoff2}) format("woff2"),
      url(${interThinItalicWoff}") format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(${interExtraLightWoff2}) format("woff2"),
      url(${interExtraLightWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url(${interExtraLightItalicWoff2}) format("woff2"),
      url(${interExtraLightItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${interLightWoff2}) format("woff2"),
      url(${interLightWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(${interLightItalicWoff2}) format("woff2"),
      url(${interLightItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${interRegularWoff2}) format("woff2"),
      url(${interRegularWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${interItalicWoff2}) format("woff2"),
      url(${interItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(${interMediumWoff2}) format("woff2"),
      url(${interMediumWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url(${interMediumItalicWoff2}) format("woff2"),
      url(${interMediumItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${interSemiBoldWoff2}) format("woff2"),
      url(${interSemiBoldWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(${interSemiBoldItalicWoff2}) format("woff2"),
      url(${interSemiBoldItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${interBoldWoff2}) format("woff2"),
      url(${interBoldWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(${interBoldItalicWoff2}) format("woff2"),
      url(${interBoldItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${interExtraBoldWoff2}) format("woff2"),
      url(${interExtraBoldWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(${interExtraBoldItalicWoff2}) format("woff2"),
      url(${interExtraBoldItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(${interBlackWoff2}) format("woff2"),
      url(${interBlackWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url(${interBlackItalicWoff2}) format("woff2"),
      url(${interBlackItalicWoff}) format("woff");
  }
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url(${interVarWoff2}) format("woff2");
  }
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    font-named-instance: 'Italic';
    src: url(${interItalicVarWoff2}) format("woff2");
  }
`

export default interFontFaceStack