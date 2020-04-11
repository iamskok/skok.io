/** @jsx jsx */
import { jsx } from 'theme-ui'

const Text = ({ children, weight, italic, mono, ss }) => (
  <p sx={{
    fontFamily: mono ? 'Fira Code VF' : ``,
    fontWeight: weight,
    fontStyle: italic ? 'italic' : 'normal',
    fontSize: 24,
    fontFeatureSettings: ss ?
      `'ss01' on,
        'ss02' on,
        'ss03' on,
        'ss04' on,
        'ss05' on,
        'ss06' on
      ` :
      ``
  }}>
    {children}
  </p>
)

export {Text}
