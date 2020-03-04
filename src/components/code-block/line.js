/** @jsx jsx */
import { jsx } from 'theme-ui'
import LineNumber from './line-number'
import LineTokens from './line-tokens'

const Line = ({
  line,
  lineNumber,
  getLineProps,
  getTokenProps,
  showLineNumbers,
  highlight
}) => (
  <div
    {...getLineProps({
      line,
      key: lineNumber,
    })}
    sx={{
      backgroundColor: highlight ? `secondary` : ``,
      paddingX: highlight ? 20 : ``,
      marginX: highlight ? -20 : ``,
    }}
  >

    {
      showLineNumbers &&
      <LineNumber index={lineNumber} />
    }

    <LineTokens
      line={line}
      getTokenProps={getTokenProps}
    />
  </div>
)

export default Line