import { useThemeUI } from 'theme-ui'
import React from 'react'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'

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
  const { codeBlock } = useSiteMetadata()
  const [language] = className.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const code = children.props.children.trim()
  const prismThemeUI = themeUI.theme.styles.prism
  const { lineNumbers } = codeBlock

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
        lineNumbers={lineNumbers}
      />
    )
  }
}

export default CodeBlock