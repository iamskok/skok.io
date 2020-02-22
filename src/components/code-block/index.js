/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { LivePreview, LiveError, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'
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
  const themeUI = useThemeUI()
  const [language] = className.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const code = children.props.children.trim()
  const prismThemeUI = themeUI.theme.styles.prism

  if (props[`react-live`]) {
    return (
      <LiveProvider
        code={code}
        theme={prismThemeUI}
        metastring={metastring}
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
        theme={prismThemeUI}
        lineCount={true}
      />
    )
  }
}

export default CodeBlock