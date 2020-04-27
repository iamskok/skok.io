/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './calculate-lines-to-highlight'
import isFeatureEnabled from './is-feature-enabled'
import getLanguage from './get-language'
import CopyButton from './copy-button'
import ThemeToggleButton from './theme-toggle-button'
import LineNumbersButton from './line-numbers-button'
import FileName from './file-name'
import LanguageTab from './language-tab'
import scope from './scope'
import { PrismThemeConsumer } from './prism-theme-provider'
import { baseThemeSettings } from '../../gatsby-plugin-theme-ui'

const { rythm } = baseThemeSettings

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

  // Get all enabled features
  const isLive = isFeatureEnabled(live)
  const isNoInline = isFeatureEnabled(noInline)
  const isDisabled = isFeatureEnabled(disabled)
  const isLineNumbers = isFeatureEnabled(lineNumbers, globalLineNumbers)
  const isLineNumbersButton = isFeatureEnabled(lineNumbersButton, globalLineNumbersButton)
  const isThemeToggleButton = isFeatureEnabled(themeToggleButton, globalThemeToggleButton)
  const isCopyButton = isFeatureEnabled(copyButton, globalCopyButton)
  const isLanguageTab = isFeatureEnabled(languageTab, globalLanguageTab)
  const isFileName = !!fileName

  const [lineNumbersState, setLineNumbersState] = useState(isLineNumbers)
  const toggleLineNumbers = () => setLineNumbersState(!lineNumbersState)

  const [scrollbar, setScrollbar] = useState(false)
  const addScrollbar = () => {
    setScrollbar(true)
    setTimeout(() => {
      setScrollbar(false)
    }, 5000)
  }

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div sx={{
          marginBottom: rythm,
          position: 'relative',
          marginX: 3 * -1,
        }}>
          {isLanguageTab && !isLive &&
          <LanguageTab language={getLanguage(className)} />}

          <div sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: prismTheme.plain.backgroundColor,
            transition: 'background-color 400ms ease',
          }}>
            <div sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: !isFileName && 'row-reverse',
              paddingY: 2
            }}>
              {isFileName && <FileName name={fileName} />}
              <div sx={{ marginX: 2 }}>
                {isLineNumbersButton && <LineNumbersButton
                  onClick={toggleLineNumbers} />}
                {isThemeToggleButton && <ThemeToggleButton />}
                {isCopyButton && <CopyButton code={code} />}
              </div>
            </div>
          </div>
          <Styled.pre
            onScroll={ addScrollbar }
            sx={{
              margin: 0,
              backgroundColor: prismTheme.plain.backgroundColor,
              transition: 'background-color 400ms ease',
              '&::-webkit-scrollbar': {
                height: `5px`,
              },
              '&::-webkit-scrollbar-thumb': {
                background: scrollbar ? prismTheme.plain.color : `rgba(0,0,0,0)`,
              }
            }}
          >
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