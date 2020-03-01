/** @jsx jsx */
import { jsx } from 'theme-ui'
import LineNumber from './line-number'
import LineTokens from './line-tokens'

const Line = ({
  line,
  lineNumber,
  getLineProps,
  getTokenProps,
  shouldHighlightLine,
  showLineNumbers,
  totalLineLength
}) => (
  <div
    {...getLineProps({
      line,
      sx: {
        backgroundColor: shouldHighlightLine(lineNumber) ? `secondary` : ``,
        paddingX: shouldHighlightLine(lineNumber) ? 20 : ``,
        marginX: shouldHighlightLine(lineNumber) ? -20 : ``,
      }
    })}
  >
    {
      showLineNumbers &&
      <LineNumber
        index={lineNumber}
        totalLineLength={totalLineLength}
      />
    }
    <LineTokens
      line={line}
      getTokenProps={getTokenProps}
    />
  </div>
)

export default Line