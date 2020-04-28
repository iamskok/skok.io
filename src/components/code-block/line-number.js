/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const LineNumber = ({
  index,
  highlight = false
}) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <span sx={{
        display: 'inline-block',
        width: 'lineNumber',
        userSelect: 'none',
        textAlign: 'center',
        marginRight: 2,
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
      }}>
        {++index}
      </span>
    )}
  </PrismThemeConsumer>
)

export default LineNumber