/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Editor from 'react-simple-code-editor'
import HighlightCode from './highlight-code'

const CodeEditor = ({
  code,
  disabled,
  language,
  onChange,
  style,
  theme,
  metastring,
  showLineNumbers,
  shouldHighlightLine,
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
      metastring={metastring}
      showLineNumbers={showLineNumbers}
      shouldHighlightLine={shouldHighlightLine}
    />
  )

  return (
    <div sx={{
      display: `flex`,
      overflow: `hidden`
    }}>
      <div sx={{
        flex: 1,
        overflow: `auto`
      }}>
        <Editor
          disabled={disabled}
          value={codeString}
          highlight={highlightCode}
          onValueChange={updateContent}
          sx={{
            caretColor,
            minWidth: `100%`,
            float: `left`,
            '& > textarea': {
              zIndex: 1,
              paddingLeft: showLineNumbers ? `60px !important` : `20px !important`,
              paddingRight: `20px !important`,
              whiteSpace: `pre !important`
            },
          }}
          {...rest}
        />
      </div>
    </div>
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
