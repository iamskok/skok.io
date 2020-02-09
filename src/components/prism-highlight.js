/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Highlight from 'prism-react-renderer'

const PrismHighlight = ({
  defaultProps,
  props,
  // outerClassName,
  code,
  language,
  theme,
  shouldHighlightLine
}) => (
  <Highlight
    code={code}
    language={language}
    theme={theme}
    {...defaultProps}
    {...props}
  >
    {({
      // className,
      // style,
      tokens,
      getLineProps,
      getTokenProps
    }) => (
      <Styled.code
        // className={`${outerClassName} ${className}`}
        // style={style}
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
        ))}
      </Styled.code>
    )}
  </Highlight>
)

export default PrismHighlight