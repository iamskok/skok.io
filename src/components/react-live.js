import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const ReactLive = ({
  codeString,
  noInline,
  theme,
  // scope,
  ...props
}) => (
  <LiveProvider
    code={codeString}
    noInline={noInline}
    theme={theme}
    {...props}
    // scope={components}
  >
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
)

export default ReactLive