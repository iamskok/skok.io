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
  lineNumbers: globalLineNumbers,
  ...props
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  let showLineNumbers

  const meta = metastring &&
    metastring.split(` `).reduce((acc, cur) => {
      if (cur.split(`=`).length > 1) {
        const t = cur.split(`=`)
        acc[t[0]] = t[1]
        return acc
      }
      acc[cur] = true
      return acc
    }, {})

  if (meta) {
    Object.keys(meta).forEach(key => props[key] = meta[key])
    const { lineNumbers } = meta

    if (lineNumbers !== undefined) {
      showLineNumbers = lineNumbers === 'true'
    } else {
      showLineNumbers = globalLineNumbers
    }
  }

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
                sx: {
                  backgroundColor: shouldHighlightLine(i) ? `secondary` : ``
                }
              })}
            >
              {showLineNumbers && <LineNumber index={i}/>}
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