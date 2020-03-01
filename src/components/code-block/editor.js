/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor'
import HighlightCode from './highlight-code'

const CodeEditor = ({
  code,
  disabled,
  language,
  onChange,
  style,
  theme,
  ...rest
}) => {
  const [codeString, setCodeString] = useState(code)
  const caretColor = theme.plain.color

  useEffect(() => {
    onChange(codeString)
  }, [onChange, codeString])

  const updateContent = code => setCodeString(code)

  const highlightCode = () => (
    <HighlightCode
      code={codeString}
      theme={theme}
      language={language}
      lineNumbers={false}
    />
  )

  return (
    <Editor
      disabled={disabled}
      value={codeString}
      highlight={highlightCode}
      onValueChange={updateContent}
      sx={{
        caretColor,
        '.npm__react-simple-code-editor__textarea': {
          zIndex: 1,
          padding: `20px !important`
        }
      }}
      {...rest}
    />
  )
}

CodeEditor.propTypes = {
  code: PropTypes.string,
  // disabled: PropTypes.boolean,
  language: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  theme: PropTypes.object
}

export default CodeEditor
