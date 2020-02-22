import React from 'react'
import { LivePreview, LiveError, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'

const ReactLiveEditor = ({ code, theme, metastring, lineNumbers }) => (
  <LiveProvider
    code={code}
    theme={theme}
    metastring={metastring}
    lineNumbers={lineNumbers}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ReactLiveEditor