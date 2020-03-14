import dark from 'prism-react-renderer/themes/nightOwl'
import light from 'prism-react-renderer/themes/nightOwlLight'
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
      lineHighlight: {
        // editor.lineHighlightBackground
        backgroundColor: '#0003',
      },
    }
  }
}

export default prismThemes
