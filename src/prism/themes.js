import dark from 'prism-react-renderer/themes/duotoneDark'
import light from 'prism-react-renderer/themes/duotoneLight'
import colors from '../gatsby-plugin-theme-ui/colors'

const { text, primary } = colors
const {
  text: darkModeText,
  primary: darkModePrimary
} = colors.modes.dark

const prismThemes = {
  light: {
    ...light,
    caret: text,
    count: text,
    lineHighlight: primary
  },
  dark: {
    ...dark,
    caret: darkModeText,
    count: darkModeText,
    lineHighlight: darkModePrimary
  }
}

export default prismThemes
