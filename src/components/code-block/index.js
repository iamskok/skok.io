/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { LiveEditor, LivePreview, LiveError, LiveProvider } from './vendors/react-live'
import LiveEditor2 from './live-editor'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'
import dracula from 'prism-react-renderer/themes/dracula'
import HighlightCode from './highlight-code'
import Highlight, { Prism } from 'prism-react-renderer'
import { Fragment } from 'react'

const aliases = {
  js: 'javascript',
  sh: 'bash',
}

const CodeBlock = ({
  children,
  className,
  title,
  metastring,
  ...props
}) => {
  const [language] = className.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const code = children.props.children.trim()
  console.log('4. CodeBlock code', code)

  if (props['react-live']) {
    return (
      <LiveProvider
        code={code}
        theme={dracula}
      >
        <LiveEditor />
        <LiveEditor2 />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      // <HighlightCode
      //   code={code}
      //   language={lang}
      //   theme={dracula}
      //   shouldHighlightLine={shouldHighlightLine}
      // />
      <Highlight
        Prism={Prism}
        code={code}
        theme={dracula}
        language={lang}
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
}

export default CodeBlock