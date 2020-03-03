/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import Line from './line'

const HighlightCode = ({
  code,
  language,
  theme,
  showLineNumbers,
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
      style,
      className
    }) => (
      <Styled.code
        style={style}
        className={className}
        sx={{ paddingX: 20 }}
      >
        {tokens.map((line, i) => (
          <Line
            key={i}
            line={line}
            lineNumber={i}
            getLineProps={getLineProps}
            getTokenProps={getTokenProps}
            showLineNumbers={showLineNumbers}
            shouldHighlightLine={shouldHighlightLine}
          />
        ))}
      </Styled.code>
    )}
  </Highlight>
)

export default HighlightCode