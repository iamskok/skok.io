/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import LineNumber from './line-number'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'

const HighlightCode = ({
  code,
  language,
  theme,
  metastring,
  lineNumbers = true
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

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
        style,
        className
      }) => (
        <Styled.code
          style={style}
          className={className}
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
              {lineNumbers && <LineNumber index={i}/>}
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