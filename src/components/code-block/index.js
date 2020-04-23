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
import ThemeToggleButton from './theme-toggle-button'
import LineNumbersButton from './line-numbers-button'
import FileName from './file-name'
import LanguageTab from './language-tab'
import scope from './scope'
import { PrismThemeConsumer } from './prism-theme-provider'

const CodeBlock = ({
  children,
  className,
  metastring,
  lineNumbers,
  lineNumbersButton,
  themeToggleButton,
  live,
  noInline,
  disabled,
  copyButton,
  fileName,
  languageTab
}) => {
  const {
    codeBlock: {
      lineNumbers: globalLineNumbers,
      lineNumbersButton: globalLineNumbersButton,
      themeToggleButton: globalThemeToggleButton,
      copyButton: globalCopyButton,
      languageTab: globalLanguageTab,
    }
  } = useSiteMetadata()

  const language = getLanguage(className)
  const code = children.props.children.trim()
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const isLive = convertMetastringPropToBool(live)
  const isNoInline = convertMetastringPropToBool(noInline)
  const isDisabled = convertMetastringPropToBool(disabled)

  const isLineNumbers = lineNumbers !== undefined ?
    (lineNumbers === 'true' || lineNumbers === true) :
    globalLineNumbers 

  const isLineNumbersButton = lineNumbersButton !== undefined ?
    (lineNumbersButton === 'true' || lineNumbersButton === true) :
    globalLineNumbersButton 

  const isThemeToggleButton = themeToggleButton !== undefined ?
    (themeToggleButton === 'true' || themeToggleButton === true) :
    globalThemeToggleButton 

  const isCopyButton = copyButton !== undefined ?
    (copyButton === 'true' || copyButton === true) :
    globalCopyButton

  const isLanguageTab = languageTab !== undefined ?
    (languageTab === 'true' || languageTab === true) :
    globalLanguageTab

  const isFileName = !!fileName

  const [lineNumbersState, setLineNumbersState] = useState(isLineNumbers)
  const toggleLineNumbers = () => setLineNumbersState(!lineNumbersState)

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div sx={{
          marginBottom: 20,
          position: 'relative'
        }}>
          {isLanguageTab && <LanguageTab language={getLanguage(className)} />}
          <div sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div sx={{
              display: 'flex',
              backgroundColor: `${prismTheme.plain.backgroundColor}`,
              transition: 'background 400ms ease',
              flexDirection: !isFileName && 'row-reverse',
              paddingY: 1
            }}>
              {isFileName && <FileName name={fileName} />}
              <div>
                {isLineNumbersButton && <LineNumbersButton
                  onClick={toggleLineNumbers} />}
                {isThemeToggleButton && <ThemeToggleButton />}
                {isCopyButton && <CopyButton code={code} />}
              </div>
            </div>
          </div>
          <Styled.pre sx={{ margin: 0 }}>
            {isLive ?
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
            />}
          </Styled.pre>
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default CodeBlock