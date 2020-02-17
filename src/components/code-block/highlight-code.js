/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'

const HighlightCode = ({
  code,
  language,
  theme,
  metastring,
  lineNumbers = false
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
        <Styled.code style={style} className={className}>
          {/* {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))} */}
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
                lineNumbers &&
                <span sx={{
                  display: 'inline-block',
                  width: '1.8em',
                  userSelect: 'none',
                  opacity: 0.3
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