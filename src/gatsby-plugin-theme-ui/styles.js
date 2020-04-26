import { baseThemeSettings } from './index'
import unitless from '../utils/unitless'

const { rythm, lineHeight: baseLineHeight } = baseThemeSettings

const heading = {
  fontWeight: `heading`,
  lineHeight: `heading`,
  marginTop: (unitless(rythm) * 3) + `rem`,
  marginBottom: rythm,
}

const monospaceFont = {
  fontFamily: `monospace`,
  fontFeatureSettings: `'salt', 'calt', 'case', 'cpsp', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06'`,
}

export default {
  root: {
    margin: 0,
    fontFamily: `body`,
    fontFeatureSettings: `'kern', 'calt', 'ss01', 'ss02', 'ss03'`,
  },
  pre: {
    margin: `0 0 ${rythm} 0`,
    fontSize: 3,
    lineHeight: baseLineHeight,
    color: `secondary`,
    bg: `muted`,
    overflowX: `auto`,
    ...monospaceFont,
  },
  code: {
    float: `left`,
    minWidth: `100%`,
    whiteSpace: `pre`,
    paddingY: 0,
    ...monospaceFont,
  },
  inlineCode: {
    fontSize: 3,
    lineHeight: baseLineHeight,
    color: `secondary`,
    backgroundColor: `muted`,
    ...monospaceFont,
  },
  h1: {
    ...heading,
    fontSize: 5,
    lineHeight: 5
  },
  h2: {
    ...heading,
    fontSize: 4,
    lineHeight: 4,
  },
  h3: {
    ...heading,
    fontSize: 3,
    lineHeight: 3,
  },
  h4: {
    ...heading,
    fontSize: 2,
    lineHeight: 2,
  },
  h5: {
    ...heading,
    fontSize: 1,
    lineHeight: 1,
  },
  h6: {
    ...heading,
    fontSize: 0,
    lineHeight: 0,
  },
  p: {
    fontSize: 3,
    margin: `0 0 ${rythm} 0`,
    lineHeight: baseLineHeight,
    '& > img': {
      marginBottom: 0
    },
  },
  a: {
    color: `primary`,
    '&:hover': {
      color: `secondary`,
      textDecoration: `none`,
    }
  },
  img: {
    marginBottom: rythm,
    maxWidth: `100%`,
    height: `auto`,
  },
  hr: {
    marginTop: (unitless(rythm) * 3) + `rem`,
    marginBottom: (unitless(rythm) * 3) + `rem`,
    border: 0,
    borderBottom: `1px solid`,
  },
  table: {
    width: `100%`,
    marginY: 4,
    borderCollapse: `separate`,
    borderSpacing: 0,
  },
  th: {
    textAlign: `left`,
    verticalAlign: `bottom`,
    paddingTop: `4px`,
    paddingBottom: `4px`,
    paddingRight: `4px`,
    paddingLeft: 0,
    borderColor: `inherit`,
    borderBottomWidth: `2px`,
    borderBottomStyle: `solid`
  },
  td: {
    textAlign: `left`,
    verticalAlign: `top`,
    paddingTop: `4px`,
    paddingBottom: `4px`,
    paddingRight: `4px`,
    paddingLeft: 0,
    borderColor: `inherit`,
    borderBottomWidth: `1px`,
    borderBottomStyle: `solid`
  },
}
