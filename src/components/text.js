/** @jsx jsx */
import { jsx } from 'theme-ui'

const Text = ({children, weight, italic }) => (
  <p sx={{
    fontWeight: weight,
    fontStyle: italic ? 'italic' : 'normal',
    fontSize: 24,
    '@supports (font-variation-settings: normal)': {
      fontVariationSettings: italic ? `"slnt" -10` : '',
    }
  }}>
    {children}
  </p>
)

export {Text}
