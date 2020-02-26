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
  showLineNumbers
}) => (
  <div
    key={lineNumber}
    {...getLineProps({
      line,
      key: lineNumber,
      sx: {
        backgroundColor: shouldHighlightLine(lineNumber) ? `secondary` : ``
      }
    })}
  >
    { showLineNumbers && <LineNumber index={lineNumber} /> }
    <LineTokens
      line={line}
      getTokenProps={getTokenProps}
    />
  </div>
)

export default Line