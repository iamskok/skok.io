import Highlight, { Prism } from 'prism-react-renderer'
import { jsx, Styled } from 'theme-ui'
import React, { Fragment } from 'react'

const HighlightCode = ({
  code,
  lang,
  theme,
  // shouldHighlightLine,
}) => {
  console.log('3. HighlightCode code', code)
  return (
    <Highlight
      Prism={Prism}
      code={code}
      theme={theme}
      language={lang}
      style={{zIndex: 9999}}
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