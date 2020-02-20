/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'

const HighlightCode = ({
  code,
  language,
  theme,
  metastring,
  lineCount = false
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      Prism={Prism}
      code={code}
      theme={theme}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps, style, className }) => (
        <Styled.code
          className={className}
          style={style}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({
                line,
                key: i,
                className: shouldHighlightLine(i) ? 'highlight-line' : '',
              })}
            >
              {
                lineCount &&
                <span sx={{
                  display: 'inline-block',
                  width: '1.8em',
                  userSelect: 'none',
                  textAlign: 'center',
                  opacity: 0.25,
                  backgroundColor: 'black',
                  mr: 2
                }}>
                  {i + 1}
                </span>
              }
              {line.map((token, key) => (
                <span
                  {...getTokenProps({ token, key })}
                  sx={{ display: 'inline-block' }}
                />
              ))}
            </div>
          ))}
        </Styled.code>
      )}
    </Highlight>
  )
}

export default HighlightCode