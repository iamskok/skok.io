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
        // marginRight: -lineNumberWidth,
        width: `calc(100% + ${lineNumberWidth + 'px'})`,
        backgroundColor: highlight ? `prismHighlight` : `transparent`,
        transform: lineNumbers ?
          `translate3d(0, 0, 0)` :
          `translate3d(${-lineNumberWidth + 'px'}, 0, 0)`,
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
        lineNumbers={lineNumbers}
      />
    </Box>
  )
}

export default Line