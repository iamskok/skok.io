/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './calculate-lines-to-highlight'
import convertMetastringPropToBool from './convert-metastring-prop-to-bool'
import getLanguage from './get-language'
import CopyButton from './copy-button'
import ThemeButton from './theme-button'
import LineNumbersButton from './line-numbers-button'
import FileName from './file-name'
import aliases from './aliases'
import scope from './scope'
import { PrismThemeConsumer } from './prism-theme-provider'

const CodeBlock = ({
  children,
  className,
  metastring,
  lineNumbers,
  live,
  noInline,
  disabled,
  copy,
  fileName
}) => {
  const {
    codeBlock: {
      lineNumbers: globalLineNumbers,
      copy: globalCopy,
    }
  } = useSiteMetadata()

  const language = aliases[getLanguage(className)] || getLanguage(className)
  const code = children.props.children.trim()
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const isLive = convertMetastringPropToBool(live)
  const isNoInline = convertMetastringPropToBool(noInline)
  const isDisabled = convertMetastringPropToBool(disabled)

  const isLineNumbers = lineNumbers !== undefined ?
    (lineNumbers === 'true' || lineNumbers === true) :
    globalLineNumbers

  const isCopy = copy !== undefined ?
    (copy === 'true' || copy === true) :
    globalCopy

  const [lineNumbersState, setLineNumbersState] = useState(isLineNumbers)
  const toggleLineNumbers = () => setLineNumbersState(!lineNumbersState)

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div>
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div sx={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}>
              {isCopy && <CopyButton code={code} />}
              <LineNumbersButton onClick={toggleLineNumbers} />
              <ThemeButton />
            </div>

            {
              fileName &&
              <FileName name={fileName} />
            }
          </div>
          <Styled.pre sx={{ marginTop: 0 }}>
            {
              isLive ?
              <ReactLiveEditor
                code={code}
                theme={prismTheme}
                scope={scope}
                language={language}
                metastring={metastring}
                disabled={isDisabled}
                noInline={isNoInline}
                lineNumbers={lineNumbersState}
                shouldHighlightLine={shouldHighlightLine}
              /> :
              <HighlightCode
                code={code}
                language={language}
                theme={prismTheme}
                metastring={metastring}
                lineNumbers={lineNumbersState}
                shouldHighlightLine={shouldHighlightLine}
              />
            }
          </Styled.pre>
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default CodeBlock