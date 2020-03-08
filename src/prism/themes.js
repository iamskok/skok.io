import dark from 'prism-react-renderer/themes/nightOwl'
import light from 'prism-react-renderer/themes/nightOwlLight'
import colors from '../gatsby-plugin-theme-ui/colors'

const { text, primary } = colors
const {
  text: darkModeText,
  primary: darkModePrimary
} = colors.modes.dark

const prismThemes = {
  ...light,
  caret: text,
  count: text,
  lineHighlight: primary,
  modes: {
    dark: {
      ...dark,
      caret: darkModeText,
      count: darkModeText,
      lineHighlight: darkModePrimary
    }
  }
}

export default prismThemes
