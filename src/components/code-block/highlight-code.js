/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'

const HighlightCode = ({
  code,
  lang,
  theme,
  // shouldHighlightLine,
  ...props
}) => {
  console.log('3. HighlightCode code', code)
  return (
    <Highlight
      Prism={Prism}
      code={code}
      language={lang}
      theme={theme}
      {...props}
    >
      {({
        // className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }) => (
          <Styled.code
            // className={className}
            style={style}
          >
            {tokens.map((line, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                    // className: shouldHighlightLine(i) ? 'highlight-line' : '',
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

export default HighlightCode