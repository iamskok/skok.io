/** @jsx jsx */
import { jsx } from 'theme-ui'
import LineNumber from './line-number'
import LineTokens from './line-tokens'
import { PrismThemeConsumer } from './prism-theme-provider'

const Line = ({
  line,
  lineNumber,
  getLineProps,
  getTokenProps,
  lineNumbers,
  highlight
}) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <div
        {...getLineProps({
          line,
          key: lineNumber,
        })}
        sx={{
          backgroundColor: highlight ?
            prismTheme.lineHighlight &&
            prismTheme.lineHighlight.backgroundColor :
            `transparent`,
          paddingX: highlight ? 20 : `0`,
          marginX: highlight ? -20 : `0`,
          transition: 'background-color 400ms ease, color 400ms ease'
        }}
      >

        {lineNumbers && <LineNumber index={lineNumber} />}

        <LineTokens
          line={line}
          getTokenProps={getTokenProps}
        />
      </div>
    )}
  </PrismThemeConsumer>
)

export default Line