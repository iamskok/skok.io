/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { darken } from '@theme-ui/color'
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
    <div
      {...getLineProps({
        line,
        key: lineNumber,
      })}
      sx={{
        backgroundColor: highlight ?
          darken(`gray`, 0.1) :
          `transparent`,
        transform: lineNumbers ?
          `translate3d(0, 0, 0)` :
          `translate3d(${-1 * lineNumberWidth + 'px'}, 0, 0)`,
        transition: `background-color 400ms ease,
          color 400ms ease,
          transform 400ms ease`,
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
  )
}

export default Line