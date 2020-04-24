const heading = {
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 3,
}

const fontFamilyMonospace = {
  fontFamily: 'monospace',
  fontFeatureSettings: `'salt', 'calt', 'case', 'cpsp', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06'`,
}

const fontFamilyBody = {
  fontFamily: 'body',
  fontFeatureSettings: `'kern', 'calt', 'ss01', 'ss02', 'ss03'`,
}

export default {
  root: {
    margin: 0,
    ...fontFamilyBody,
  },
  pre: {
    fontSize: 3,
    lineHeight: 1.5,
    color: 'secondary',
    bg: 'muted',
    overflowX: 'auto',
    ...fontFamilyMonospace,
  },
  code: {
    float: 'left',
    minWidth: '100%',
    whiteSpace: `pre`,
    paddingY: 0,
    ...fontFamilyMonospace,
  },
  inlineCode: {
    fontSize: 3,
    lineHeight: 1.5,
    color: 'secondary',
    backgroundColor: 'muted',
    ...fontFamilyMonospace,
  },
  h1: {
    ...heading,
    fontSize: [5, 6],
  },
  h2: {
    ...heading,
    fontSize: [4, 5],
  },
  h3: {
    ...heading,
    fontSize: 3,
  },
  h4: {
    ...heading,
    fontSize: 2,
  },
  h5: {
    ...heading,
    fontSize: 1,
  },
  h6: {
    ...heading,
    fontSize: 0,
  },
  p: {
    fontSize: [2, 3],
    m: 0,
    mb: 4,
  },
  a: {
    color: 'primary',
    '&:hover': {
      color: 'secondary',
    }
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  hr: {
    mt: 5,
    mb: 5,
    border: 0,
    borderBottom: '1px solid',
  },
  table: {
    width: '100%',
    my: 4,
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    verticalAlign: 'bottom',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    verticalAlign: 'top',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingRight: '4px',
    paddingLeft: 0,
    borderColor: 'inherit',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid'
  },
}
