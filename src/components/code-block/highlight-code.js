/** @jsx jsx */
import Highlight, { Prism } from '@skok/prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import Line from './line'

const HighlightCode = ({
  code,
  language,
  lineNumbers,
  shouldHighlightLine,
}) => {
  return (
    <Highlight
      Prism={Prism}
      code={code}
      theme={undefined}
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