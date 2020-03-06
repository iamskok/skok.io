import React from 'react'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './calculate-lines-to-highlight'
import getLanguage from './get-language'
import prismThemes from '../../prism/themes'
import aliases from './aliases'

const CodeBlock = ({
  children,
  className,
  metastring,
  noInline,
  lineNumbers,
  live,
}) => {
  const theme = prismThemes.dark
  const { codeBlock: { lineNumbers: globalLineNumbers } } = useSiteMetadata()
  const language = aliases[getLanguage(className)] || getLanguage(className)
  const code = children.props.children.trim()
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const showLineNumbers = lineNumbers !== undefined ?
    lineNumbers === 'true' :
    globalLineNumbers

  return (
    live ?
    <ReactLiveEditor
      code={code}
      theme={theme}
      language={language}
      noInline={noInline}
      metastring={metastring}
      lineNumbers={showLineNumbers}
      shouldHighlightLine={shouldHighlightLine}
    /> :
    <HighlightCode
      code={code}
      language={language}
      theme={theme}
      metastring={metastring}
      lineNumbers={showLineNumbers}
      shouldHighlightLine={shouldHighlightLine}
    />
  )
}

export default CodeBlock