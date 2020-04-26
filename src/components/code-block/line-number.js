/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'
import { baseThemeSettings } from '../../gatsby-plugin-theme-ui'
import unitless from '../../utils/unitless'

const { rythm } = baseThemeSettings

const LineNumber = ({ index, lineNumbers, highlight = false }) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <span sx={{
        display: 'inline-block',
        width: 'lineNumber',
        userSelect: 'none',
        textAlign: 'center',
        color: (
          highlight &&
          prismTheme.lineNumberActive &&
          prismTheme.lineNumberActive.color
        ) ||
        (
          prismTheme.lineNumber &&
          prismTheme.lineNumber.color
        ) ||
        prismTheme.plain.color,
        marginLeft: unitless(rythm) * -1 + 'rem',
        marginRight: rythm,
        transition: 'background-color 400ms ease, color 400ms ease, transform 400ms ease',
        transform: lineNumbers ? 'translate3d(0, 0, 0)' : 'translate3d(-40px, 0, 0)',
      }}>
        {++index}
      </span>
    )}
  </PrismThemeConsumer>
)

export default LineNumber