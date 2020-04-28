/** @jsx jsx */
import Highlight, { Prism } from '@skok/prism-react-renderer'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import Line from './line'

const HighlightCode = ({
  code,
  language,
  theme,
  lineNumbers,
  shouldHighlightLine,
}) => {
  const {
    theme: {
      sizes: {
        lineNumber: lineNumberWidth
      }
    }
  } = useThemeUI()

  return (
    <Highlight
      Prism={Prism}
      code={code}
      theme={theme}
      language={language}
    >
      {({
        tokens,
        getLineProps,
        getTokenProps,
        style
      }) => (
        <Styled.code
          sx={{
            ...style,
            width: `calc(100% + ${lineNumberWidth + 'px'})`,
            transition: 'background-color 400ms ease'
          }}
        >
          { tokens.map((line, i) => (
            <Line
              key={i}
              line={line}
              lineNumber={i}
              getLineProps={getLineProps}
              getTokenProps={getTokenProps}
              lineNumbers={lineNumbers}
              highlight={shouldHighlightLine(i)}
            />
          )) }
        </Styled.code>
      )}
    </Highlight>
  )
}

export default HighlightCode