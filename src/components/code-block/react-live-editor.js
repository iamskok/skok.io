import React from 'react'
import { LivePreview, LiveError, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'

const ReactLiveEditor = ({ code, theme }) => (
  <LiveProvider
    code={code}
    theme={theme}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ReactLiveEditor