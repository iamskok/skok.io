/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import { useState, useContext } from "react"
import useSound from "use-sound"
import HighlightCode from "./HighlightCode"
import ReactLiveEditor from "./ReactLiveEditor"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { SoundContext } from "../SoundProvider"
import calculateLinesToHighlight from "./calculate-lines-to-highlight"
import getConfig from "./get-config"
import getLanguage from "./get-language"
import CopyButton from "./CopyButton"
import LineNumbersButton from "./LineNumbersButton"
import FileName from "./FileName"
import LanguageTab from "./LanguageTab"
import scope from "./scope"
import { baseThemeSettings } from "../../gatsby-plugin-theme-ui"
import switchOn from "../../assets/sounds/switch-on.mp3"

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
  languageTab,
}) => {
  const {
    codeBlock: {
      lineNumbers: globalLineNumbers,
      lineNumbersButton: globalLineNumbersButton,
      copyButton: globalCopyButton,
      languageTab: globalLanguageTab,
    },
  } = useSiteMetadata()

  const language = getLanguage(className)
  const code = children.props.children.trim()
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  // Get all enabled features
  const isLive = getConfig(live)
  const isNoInline = getConfig(noInline)
  const isDisabled = getConfig(disabled)
  const isLineNumbers = getConfig(lineNumbers, globalLineNumbers)
  const isLineNumbersButton = getConfig(
    lineNumbersButton,
    globalLineNumbersButton
  )
  const isCopyButton = getConfig(copyButton, globalCopyButton)
  const isLanguageTab = getConfig(languageTab, globalLanguageTab)
  const isFileName = !!fileName

  const [sound] = useContext(SoundContext)
  const [playSwitchOn] = useSound(switchOn)

  const [lineNumbersState, setLineNumbersState] = useState(isLineNumbers)
  const toggleLineNumbers = () => {
    setLineNumbersState(!lineNumbersState)
    sound && playSwitchOn()
  }

  const [scrollbar, setScrollbar] = useState(false)
  const addScrollbar = () => {
    setScrollbar(true)
    setTimeout(() => {
      setScrollbar(false)
    }, 5000)
  }

  return (
    <div
      sx={{
        marginBottom: rythm,
        position: "relative",
      }}
    >
      {isLanguageTab && !isLive && (
        <LanguageTab language={getLanguage(className)} />
      )}

      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: `muted`,
        }}
      >
        {isFileName && <FileName name={fileName} />}
        <div
          sx={{
            display: "flex",
            padding: 1,
          }}
        >
          <Box
            sx={{
              marginLeft: `auto`,
            }}
          >
            {isLineNumbersButton && (
              <LineNumbersButton
                handleClick={toggleLineNumbers}
                lineNumbers={lineNumbersState}
              />
            )}
            {isCopyButton && <CopyButton code={code} />}
          </Box>
        </div>
      </div>
      <Styled.pre
        onScroll={addScrollbar}
        sx={{
          margin: 0,
          "&::-webkit-scrollbar": {
            height: `5px`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
          },
        }}
      >
        {isLive ? (
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
          />
        ) : (
          <HighlightCode
            code={code}
            language={language}
            theme={undefined}
            metastring={metastring}
            lineNumbers={lineNumbersState}
            shouldHighlightLine={shouldHighlightLine}
          />
        )}
      </Styled.pre>
    </div>
  )
}

export default CodeBlock
