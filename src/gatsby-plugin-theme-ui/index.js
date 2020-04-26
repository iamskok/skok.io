import base from './tokens/base'
import colors from './tokens/colors'
import space from './tokens/space'
import sizes from './tokens/sizes'
import fonts from './tokens/fonts'
import fontWeights from './tokens/font-weights'
import fontSizes from './tokens/font-sizes'
import { lineHeights } from './tokens/line-height-headings'
import text from './variants/text'
import buttons from './variants/buttons'
import styles from './styles'

const theme = {
  colors,
  space,
  sizes,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  text,
  buttons,
  styles,
}

export default theme
export { base as baseThemeSettings }