import { baseThemeSettings } from "../index"
import unitless from "../../utils/unitless"

const { rythm } = baseThemeSettings

const italicizedSelectors = `
  & > em,
  & > em > b,
  & > b > em,
  & > strong > em,
  & > em > strong,
  & > i,
  & > i > b,
  & > b > i,
  & > strong > i,
  & > i > strong,
`

const text = {
  code: {
    fontFamily: `code`,
  },
  heading: {
    fontFamily: `heading`,
    fontWeight: `heading`,
    marginTop: unitless(rythm) * 3 + `rem`,
    marginBottom: rythm,
    fontFeatureSettings: `'kern', 'pnum'`,
    [italicizedSelectors]: {
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
