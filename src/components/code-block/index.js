/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'

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
      <ReactLiveEditor
        code={code}
        theme={prismThemeUI}
      />
    )
  } else {
    return (
      <HighlightCode
        code={code}
        language={lang}
        theme={prismThemeUI}
        metastring={metastring}
        lineNumbers={true}
      />
    )
  }
}

export default CodeBlock