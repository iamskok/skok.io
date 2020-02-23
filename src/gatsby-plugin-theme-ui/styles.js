import dracula from 'prism-react-renderer/themes/dracula'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'
import vsDark from 'prism-react-renderer/themes/vsDark'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 3,
}

export default {
  prism: {
    ...dracula,
    modes: [
      duotoneLight,
      vsDark
    ]
  },
  pre: {
    position: 'relative',
    fontFamily: 'monospace',
    // inherited by `react-simple-code-editor` textarea cursor
    color: 'secondary',
    bg: 'muted',
    overflowX: 'auto',
  },
  code: {
    fontFamily: 'inherit',
    float: 'left',
    minWidth: '100%',
    '.highlight-line': {
      backgroundColor: 'primary',
    }
  },
  inlineCode: {
    fontFamily: 'monospace',
    color: 'secondary',
    backgroundColor: 'muted'
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
  strong: {
    fontWeight: 'bold',
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
