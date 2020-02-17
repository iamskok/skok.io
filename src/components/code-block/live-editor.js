import React from 'react'
import LiveContext from './vendors/react-live/components/Live/LiveContext'
import Editor from './editor'

export default function LiveEditor(props) {
  return (
    <LiveContext.Consumer>
      {({ code, language, theme, disabled, onChange }) => {
        return (
          <Editor
            theme={theme}
            code={code}
            language={language}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
        )
      }}
    </LiveContext.Consumer>
  )
}
