import { baseThemeSettings } from "../index"
import unitless from "../../utils/unitless"

const { rythm } = baseThemeSettings

const text = {
  code: {
    fontFamily: `code`,
    fontFeatureSettings: `'salt', 'calt', 'case', 'cpsp', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06'`,
  },
  heading: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    marginTop: unitless(rythm) * 3 + `rem`,
    marginBottom: rythm,
    fontFeatureSettings: `'kern', 'pnum'`,
    "& > em, & > em > b, & > b > em, & > strong > em, & > em > strong, & > i, & > i > b, & > b > i, & > strong > i, & > i > strong": {
      variant: `text.italicHeading`,
    },
  },
  display: {
    variant: `text.heading`,
    color: `primary`,
  },
  italic: {
    fontStyle: `italic`,
    fontSynthesis: `none`,
    "@supports (font-variation-settings: normal)": {
      fontVariationSettings: `'slnt' -10`,
      fontStyle: `oblique 10deg`,
    },
  },
  italicHeading: {
    fontStyle: `italic`,
    fontSynthesis: `none`,
  },
  bold: {
    fontWeight: `bold`,
    fontSynthesis: `none`,
  },
}

export default text
