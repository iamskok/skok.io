import React from 'react'
import { LivePreview, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'
import LiveError from './live-error'

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