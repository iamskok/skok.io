import { baseThemeSettings } from '../index'
import unitless from '../../utils/unitless'

const { rythm } = baseThemeSettings

const text = {
  code: {
    fontFamily: `code`,
    fontFeatureSettings: `'salt', 'calt', 'case', 'cpsp', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06'`,
  },
  heading: {
    fontWeight: `heading`,
    lineHeight: `heading`,
    marginTop: (unitless(rythm) * 3) + `rem`,
    marginBottom: rythm,
    fontFeatureSettings: `'kern', 'calt', 'ss01', 'ss02', 'ss03'`,
  },
  display: {
    variant: `text.heading`,
    color: `primary`
  },
  italic: {
    fontStyle: `italic`,
    '@supports (font-variation-settings: normal)': {
      fontVariationSettings: `'slnt' -10`,
      fontStyle: `oblique 10deg`
    }
  }
}

export default text