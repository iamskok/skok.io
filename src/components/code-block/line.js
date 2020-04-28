/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
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
}) => {
  const {
    theme: {
      sizes: {
        lineNumber: lineNumberWidth
      }
    }
  } = useThemeUI()

  return (
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
            transition: `background-color 400ms ease, color 400ms ease, transform 400ms ease`,
            transform: lineNumbers ? `translateX(0)` : `translateX(${-1 * lineNumberWidth + 'px'})`,
          }}
        >

          <LineNumber
            index={lineNumber}
            lineNumbers={lineNumbers}
            highlight={highlight}
          />

          <LineTokens
            line={line}
            getTokenProps={getTokenProps}
            lineNumbers={lineNumbers}
          />
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default Line