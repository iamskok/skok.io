/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import Line from './line'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'
import metastringToObject from '../../utils/metastring-to-object'

const HighlightCode = ({
  code,
  language,
  theme,
  metastring,
  lineNumbers: globalLineNumbers,
  ...props
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  let showLineNumbers = undefined
  const meta = metastringToObject(metastring)

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
          // sx={{ paddingLeft: showLineNumbers ? 0 : 20 }}
        >
          {tokens.map((line, i) => (
            <Line
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
}

export default HighlightCode