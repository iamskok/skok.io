/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './utils/calculate-lines-to-highlight'

const aliases = {
  js: 'javascript',
  sh: 'bash',
}

const CodeBlock = ({
  children,
  className,
  metastring,
  noInline,
  lineNumbers,
  live
}) => {
  const { theme: { styles } } = useThemeUI()
  const { codeBlock: { lineNumbers: globalLineNumbers } } = useSiteMetadata()
  const [language] = className.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const code = children.props.children.trim()
  const prismThemeUI = styles.prism
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const showLineNumbers = globalLineNumbers !== undefined ?
    globalLineNumbers :
    lineNumbers !== undefined ?
    lineNumbers === `true` :
    undefined

  if (live) {
    return (
      <ReactLiveEditor
        code={code}
        theme={prismThemeUI}
        metastring={metastring}
        lineNumbers={showLineNumbers}
        shouldHighlightLine={shouldHighlightLine}
        noInline={noInline}
      />
    )
  } else {
    return (
      <HighlightCode
        code={code}
        language={lang}
        theme={prismThemeUI}
        metastring={metastring}
        lineNumbers={showLineNumbers}
        shouldHighlightLine={shouldHighlightLine}
      />
    )
  }
}

export default CodeBlock