import React from 'react'
import { LivePreview, LiveError, LiveProvider } from 'react-live'
import LiveEditor from './live-editor'

const ReactLiveEditor = ({ code, theme, changePrismTheme }) => (
  <LiveProvider
    code={code}
    theme={theme}
    changePrismTheme={changePrismTheme}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ReactLiveEditor