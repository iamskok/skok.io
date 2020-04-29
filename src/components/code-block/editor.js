/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
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
  lineNumbers,
  shouldHighlightLine,
  ...rest
}) => {
  const [codeString, setCodeString] = useState(code)

  const {
    theme: {
      space,
      colors: {
        primary: primaryColor
      },
      sizes: {
        lineNumber: lineNumberWidth
      }
    }
  } = useThemeUI()

  useEffect(() => {
    onChange(codeString)
  }, [onChange, codeString])

  const updateContent = code => setCodeString(code)

  const highlightCode = () => (
    <HighlightCode
      code={codeString}
      theme={undefined}
      language={language}
      metastring={metastring}
      lineNumbers={lineNumbers}
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
          value={codeString}
          disabled={disabled}
          highlight={highlightCode}
          onValueChange={updateContent}
          sx={{
            minWidth: `100%`,
            float: `left`,
            caretColor: `${primaryColor}`,
            '& > textarea': {
              zIndex: `editor`,
              paddingLeft: lineNumbers ?
                `${lineNumberWidth + space[2] + 'px'} !important` :
                `${space[2] + 'px'} !important`,
              whiteSpace: `pre !important`,
              outlineStyle: `solid`
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
  disabled: PropTypes.bool,
  language: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  theme: PropTypes.object
}

export default CodeEditor
