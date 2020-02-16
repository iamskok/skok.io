/** @jsx jsx */

import { jsx } from 'theme-ui'
import { LivePreview, LiveError, LiveProvider } from './vendors/react-live'
import LiveEditor from './live-editor'
import calculateLinesToHighlight from '../../utils/calculate-lines-to-highlight'
import dracula from 'prism-react-renderer/themes/dracula'
import HighlightCode from './highlight-code'

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
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <HighlightCode
        code={code}
        language={lang}
        theme={dracula}
        shouldHighlightLine={shouldHighlightLine}
        {...props}
      />
    )
  }
}

export default CodeBlock