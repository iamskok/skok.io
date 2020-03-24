/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Line from './line'
import loadable from "@loadable/component"

const LazyHighlight = loadable(async () => {
  const Module = await import(`prism-react-renderer`)
  const { default: Highlight, Prism } = Module
  return props => <Highlight Prism={Prism} {...props} />
})

const HighlightCode = ({
  code,
  language,
  theme,
  lineNumbers,
  shouldHighlightLine,
}) => (
  <LazyHighlight
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
  </LazyHighlight>
)

export default HighlightCode