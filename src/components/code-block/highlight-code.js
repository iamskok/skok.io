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
  const meta = metastringToObject(metastring)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  let showLineNumbers = undefined

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
}

export default HighlightCode