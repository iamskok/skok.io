/** @jsx jsx */
import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'

const HighlightCode = ({
  code,
  language,
  theme,
  // shouldHighlightLine,
}) => {
  return (
    <Highlight
      Prism={Prism}
      code={code}
      theme={theme}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps, style, className }) => (
        <Styled.code style={style} className={className}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Styled.code>
      )}
    </Highlight>
  )
}

export default HighlightCode