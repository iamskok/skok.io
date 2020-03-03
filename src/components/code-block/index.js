/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './utils/calculate-lines-to-highlight'
import metastringToObject from './utils/metastring-to-object'

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
  const { theme: { styles } } = useThemeUI()
  const { codeBlock: { lineNumbers } } = useSiteMetadata()
  const [language] = className.replace(/language-/, '').split(' ')
  const lang = aliases[language] || language
  const code = children.props.children.trim()
  const prismThemeUI = styles.prism
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const meta = metastringToObject(metastring)
  let showLineNumbers = undefined

  if (meta) {
    if (
      meta.lineNumbers === true ||
      lineNumbers === true
    ) {
      showLineNumbers = true
    } else if (
      meta.lineNumbers === false ||
      lineNumbers === false
    ) {
      showLineNumbers = false
    }
  }

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
        showLineNumbers={showLineNumbers}
        shouldHighlightLine={shouldHighlightLine}
      />
    )
  }
}

export default CodeBlock