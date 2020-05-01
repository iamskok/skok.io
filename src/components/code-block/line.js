/** @jsx jsx */
import { jsx, useThemeUI, Box } from 'theme-ui'
import LineNumber from './line-number'
import LineTokens from './line-tokens'

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
    <Box
      {...getLineProps({
        line,
        key: lineNumber,
      }) }
      sx={{
        width: `calc(100% + ${lineNumberWidth + 1 + 'px'})`,
        backgroundColor: highlight ? `prismHighlight` : `transparent`,
        transition: `transform 400ms ease`,
        border: highlight && 0,
        borderLeftWidth: highlight && 2,
        borderStyle: highlight && `solid`,
        borderColor: highlight && `prismHighlightNumber`
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
      />
    </Box>
  )
}

export default Line