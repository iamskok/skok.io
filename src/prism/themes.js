import dark from 'prism-react-renderer/themes/nightOwl'
import light from 'prism-react-renderer/themes/nightOwlLight'
import dracula from 'prism-react-renderer/themes/dracula'
import duotoneDark from 'prism-react-renderer/themes/duotoneDark'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'
import github from 'prism-react-renderer/themes/github'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext'
import palenight from 'prism-react-renderer/themes/palenight'
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple'
import vsDark from 'prism-react-renderer/themes/vsDark'
// import colors from '../gatsby-plugin-theme-ui/colors'

const prismThemes = {
  // https://github.com/sdras/night-owl-vscode-theme/blob/master/themes/Night%20Owl-Light-color-theme.json
  ...light,
  cursor: {
    // editorCursor.foreground
    color: '#80a4c2',
  },
  lineNumber: {
    // editorLineNumber.foreground
    color: '#90a7b2',
  },
  lineNumberActive: {
    // editorLineNumber.activeForeground
    color: '#403f53'
  },
  lineHighlight: {
    // editor.lineHighlightBackground
    backgroundColor: '#0003',
  },
  modes: {
    // https://github.com/sdras/night-owl-vscode-theme/blob/master/themes/Night%20Owl-color-theme.json
    dark: {
      ...dark,
      cursor: {
        // editorCursor.foreground
        color: '#80a4c2',
      },
      lineNumber: {
        // editorLineNumber.foreground
        color: '#4b6479',
      },
      lineNumberActive: {
        // editorLineNumber.activeForeground
        color: '#c5e4fd'
      },
      lineHighlight: {
        // editor.lineHighlightBackground
        backgroundColor: '#0003',
      },
    },
    dracula,
    duotoneDark,
    duotoneLight,
    github,
    oceanicNext,
    palenight,
    shadesOfPurple,
    vsDark,
  }
}

export default prismThemes
