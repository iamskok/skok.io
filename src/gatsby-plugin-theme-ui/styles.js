import { baseThemeSettings } from './index'
import unitless from '../utils/unitless'

const {
  rythm,
  lineHeight: baseLineHeight
} = baseThemeSettings

export default {
  root: {
    margin: 0,
    paddingX: (unitless(rythm) / 2) + `rem`,
    fontFamily: `body`,
    lineHeight: baseLineHeight,
    fontFeatureSettings: `'kern', 'calt', 'ss01', 'ss02', 'ss03'`,
  },
  pre: {
    variant: `text.code`,
    margin: `0 0 ${rythm} 0`,
    color: `secondary`,
    bg: `muted`,
    overflowX: `auto`,
  },
  code: {
    variant: `text.code`,
    float: `left`,
    minWidth: `100%`,
    whiteSpace: `pre`,
    paddingY: 0,
  },
  inlineCode: {
    variant: `text.code`,
    color: `secondary`,
    backgroundColor: `muted`,
  },
  h1: {
    variant: `text.display`,
    fontSize: 5,
    lineHeight: 5
  },
  h2: {
    variant: `text.heading`,
    fontSize: 4,
    lineHeight: 4,
  },
  h3: {
    variant: `text.heading`,
    fontSize: 3,
    lineHeight: 3,
  },
  h4: {
    variant: `text.heading`,
    fontSize: 2,
    lineHeight: 2,
  },
  h5: {
    variant: `text.heading`,
    fontSize: 1,
    lineHeight: 1,
  },
  h6: {
    variant: `text.heading`,
    fontSize: 0,
    lineHeight: 0,
  },
  blockquote: {
    paddingLeft: rythm,
  },
  ul: {
    margin: `0 0 ${(unitless(rythm) * 2) + 'rem'} 0`,
    paddingLeft: rythm,
    // listStylePosition: `outside`
  },
  ol: {
    margin: `0 0 ${(unitless(rythm) * 2) + 'rem'} 0`,
    paddingLeft: rythm,
    // listStylePosition: `outside`
  },
  p: {
    margin: `0 0 ${rythm} 0`,
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
    margin: `0 0 ${rythm} 0`,
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
