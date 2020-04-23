/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Editor from 'react-simple-code-editor'
import HighlightCode from './highlight-code'
import { PrismThemeConsumer } from './prism-theme-provider'

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
      lineNumbers={lineNumbers}
      shouldHighlightLine={shouldHighlightLine}
    />
  )

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
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
                caretColor: (prismTheme.cursor && prismTheme.cursor.color) || `auto`,

                '& > textarea': {
                  zIndex: 1,
                  paddingLeft: lineNumbers ? `60px !important` : `20px !important`,
                  paddingRight: `20px !important`,
                  whiteSpace: `pre !important`,
                  outlineStyle: 'solid'
                },
              }}
              {...rest}
            />
          </div>
        </div>
      )}
    </PrismThemeConsumer>
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
