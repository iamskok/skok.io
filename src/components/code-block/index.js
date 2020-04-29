/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui'
import { useState } from 'react'
import HighlightCode from './highlight-code'
import ReactLiveEditor from './react-live-editor'
import useSiteMetadata from '../../hooks/use-site-metadata'
import calculateLinesToHighlight from './calculate-lines-to-highlight'
import isFeatureEnabled from './is-feature-enabled'
import getLanguage from './get-language'
import CopyButton from './copy-button'
import LineNumbersButton from './line-numbers-button'
import FileName from './file-name'
import LanguageTab from './language-tab'
import scope from './scope'
import { baseThemeSettings } from '../../gatsby-plugin-theme-ui'

const { rythm } = baseThemeSettings

const CodeBlock = ({
  children,
  className,
  metastring,
  lineNumbers,
  lineNumbersButton,
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
  <div sx={{
    marginBottom: rythm,
    position: 'relative',
  }}>
    {isLanguageTab && !isLive &&
    <LanguageTab language={getLanguage(className)} />}

    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      transition: 'background-color 400ms ease',
      backgroundColor: `muted`
    }}>
      {isFileName && <FileName name={fileName} />}
      <div sx={{
        display: 'flex',
        padding: 1,
      }}>
        <Box sx={{
          marginLeft: `auto`
        }}>
          { isLineNumbersButton &&
            <LineNumbersButton onClick={toggleLineNumbers} />
          }
          {isCopyButton && <CopyButton code={code} />}
        </Box>
      </div>
    </div>
    <Styled.pre
      onScroll={ addScrollbar }
      sx={{
        margin: 0,
        transition: 'background-color 400ms ease',
        '&::-webkit-scrollbar': {
          height: `5px`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
        }
      }}
    >
      {isLive ?
      <ReactLiveEditor
        code={code}
        theme={undefined}
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
        theme={undefined}
        metastring={metastring}
        lineNumbers={lineNumbersState}
        shouldHighlightLine={shouldHighlightLine}
      />}
    </Styled.pre>
  </div>
)}


export default CodeBlock