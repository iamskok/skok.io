import React from 'react'
// import { useThemeUI } from 'theme-ui'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const ReactLive = ({ codeString, noInline }) => {
  // const components = useThemeUI()
  return (
    <LiveProvider
      code={codeString}
      noInline={noInline}
      // scope={components}
    >
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export default ReactLive