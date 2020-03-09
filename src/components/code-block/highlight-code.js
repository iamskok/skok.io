/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import Line from './line'

const HighlightCode = ({
  code,
  language,
  theme,
  lineNumbers,
  shouldHighlightLine,
}) => (
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
          paddingX: 20,
          transition: 'background-color 400ms ease'
        }}
      >
        {tokens.map((line, i) => (
          <Line
            key={i}
            line={line}
            lineNumber={i}
            getLineProps={getLineProps}
            getTokenProps={getTokenProps}
            lineNumbers={lineNumbers}
            highlight={shouldHighlightLine(i)}
          />
        ))}
      </Styled.code>
    )}
  </Highlight>
)

export default HighlightCode