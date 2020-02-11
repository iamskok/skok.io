/** @jsx jsx */

import Highlight, { defaultProps } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import { LiveEditor, LivePreview, LiveError, LiveProvider } from 'react-live'
import calculateLinesToHighlight from '../utils/calculate-lines-to-highlight'
import dracula from 'prism-react-renderer/themes/dracula'

const aliases = {
  js: 'javascript',
  sh: 'bash',
}

const Code = ({
  children,
  className: outerClassName,
  title,
  metastring,
  ...props
}) => {
  const [language] = outerClassName.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const codeString = children.props.children.trim()

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} theme={dracula}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        {...props}
        code={codeString}
        language={lang}
        theme={dracula}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps
        }) => (
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
        )}
      </Highlight>
    )
  }
}

export default Code