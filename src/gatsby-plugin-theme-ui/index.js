import base from './tokens/base'
import text from './tokens/text'
import colors from './tokens/colors'
import fonts from './tokens/fonts'
import fontWeights from './tokens/font-weights'
import fontSizes from './tokens/font-sizes'
import { lineHeights } from './tokens/lineHeightHeadings'
import styles from './styles'

const theme = {
  colors,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  text,
  styles,
}

export default theme
export { base as baseThemeSettings }