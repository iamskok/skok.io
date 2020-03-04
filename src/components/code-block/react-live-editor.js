import React from 'react'
import { LivePreview, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'
import LiveError from './live-error'

const ReactLiveEditor = ({
  code,
  theme,
  noInline,
  metastring,
  showLineNumbers,
  shouldHighlightLine
}) => (
  <LiveProvider
    code={code}
    theme={theme}
    noInline={noInline}
  >
    <LiveEditor
      metastring={metastring}
      showLineNumbers={showLineNumbers}
      shouldHighlightLine={shouldHighlightLine}
    />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ReactLiveEditor