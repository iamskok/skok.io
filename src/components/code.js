/** @jsx jsx */
/* eslint react/jsx-key: 0 */

import Highlight, { defaultProps } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'

const aliases = {
  js: 'javascript',
  sh: 'bash',
}

const RE = /{([\d,-]+)}/

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-')
      .map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ?
        lineNumber >= start && lineNumber <= end :
        lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

export default ({
  children,
  className: outerClassName,
  title,
  metastring,
  ...props
}) => {
  const [language] = outerClassName.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      {...props}
      code={children.trim()}
      language={lang}
      theme={undefined}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }) => (
        <Styled.pre>
          <Styled.code
            className={`${outerClassName} ${className}`}
            style={style}
          >
            {tokens.map((line, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                    className: shouldHighlightLine(i) ? 'highlight-line' : '',
                  })}
                >
                  <span sx={{
                    display: 'inline-block',
                    width: '1.8em',
                    userSelect: 'none',
                    opacity: 0.3
                  }}>
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span
                      {...getTokenProps({ token, key })}
                      sx={{ display: 'inline-block' }}
                    />
                  ))}
                </div>
              )
            })}
          </Styled.code>
        </Styled.pre>
      )}
    </Highlight>
  )
}