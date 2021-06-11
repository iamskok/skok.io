/** @jsx jsx */
import { useState, useContext } from "react"
import { jsx, Box, Flex } from "theme-ui"
import Prism from "@theme-ui/prism"
import useSound from "use-sound"
import { useThemeUI } from "theme-ui"
import copyToClipboard from "./copy-to-clipboard"
import CopyButton from "./copy-button"
import FileName from "./file-name"
import LanguageTab from "./language-tab"
import { SoundContext } from "../SoundProvider"
import bite from "../../assets/sounds/bite.mp3"
import {
  CODE_BLOCK_COPY_CLICK_TIMEOUT as COPY_CLICK_TIMEOUT,
  CODE_BLOCK_CLASS as CLASS,
  CODE_BLOCK_CONTAINER_CLASS as CONTAINER_CLASS,
} from "../../utils/constants"

// @TODO
// Scroll left/right on arrow press when focused
// Add focus prop (tabindex)
// Set theme-ui tokens

const languageRegex = new RegExp(`language-`, ``)
const highlightCommentRegex = new RegExp(
  `\/\/ highlight-((start|end)\n|line)`,
  `g`
)

const getLanguage = (className, languageRegex) => {
  const firstClassName = className?.split(` `)[0]
  const isLanguageClassName = firstClassName?.match(languageRegex)

  return isLanguageClassName ? firstClassName.replace(languageRegex, ``) : null
}

// Set `border-radius` based on the `FileName` presence
const getBorderRadius = showFileName => ({
  borderTopLeftRadius: showFileName ? 0 : 2,
  borderTopRightRadius: showFileName ? 0 : 2,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
})

const CodeBlock = ({
  children,
  className: prismClassName,
  fileName,
  id,
  showCopy = true,
  showLanguage = true,
  setTabIndex = true,
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const [sound] = useContext(SoundContext)
  const [playByte] = useSound(bite)

  const {
    theme: {
      colors: { accent: accentColor, primary: primaryColor, gray: grayColor },
    },
  } = useThemeUI()

  const handleCopyClick = () => {
    setIsCopied(true)
    copyToClipboard(children.replace(highlightCommentRegex, ``))

    if (sound) {
      playByte()
    }

    setTimeout(() => {
      setIsCopied(false)
    }, COPY_CLICK_TIMEOUT)
  }

  const elementId = id ? { id } : {}
  const language = getLanguage(prismClassName, languageRegex)

  const showLanguageTab =
    (showLanguage === `true` || showLanguage === true) && Boolean(language)
  const showFileName = Boolean(fileName)
  const showCopyButton = showCopy === `true` || showCopy === true
  const tabIndex = Number(setTabIndex === `true` || setTabIndex === true) - 1

  return (
    <Flex
      tabIndex={tabIndex}
      className={CLASS}
      {...elementId}
      sx={{
        position: `relative`,
        flexDirection: `column`,
        marginTop: 5,
        marginBottom: 4,
        scrollMarginTop: 5,
        borderRadius: 2,
        backgroundColor: `muted`,
        "&:focus": {
          ".language-tab": {
            boxShadow: `0 0 0 2px ${accentColor}`,
            transition: `box-shadow 200ms ease`,
          },
        },
        "&:focus, &:hover, &:active": {
          ".copy-button": {
            opacity: 1,
          },
        },
      }}
    >
      <Box>
        {showLanguageTab && (
          <LanguageTab
            language={language}
            className="language-tab"
            sx={{
              position: `absolute`,
              right: 4,
              transform: `translateY(calc(-100% - 2px))`,
              "&:after": {
                content: `""`,
                width: `100%`,
                height: `4px`,
                backgroundColor: `muted`,
                display: `inline-block`,
                position: `absolute`,
                bottom: `-2px`,
                right: 0,
              },
            }}
          />
        )}
        {showFileName && (
          <FileName
            fileName={fileName}
            sx={{
              borderTopRightRadius: 2,
              borderTopLeftRadius: 2,
            }}
          />
        )}
        {showCopyButton && (
          <CopyButton
            onClick={handleCopyClick}
            isCopied={isCopied}
            className="copy-button"
            sx={{
              position: `absolute`,
              zIndex: 1,
              top: 4,
              right: 2,
              opacity: 0,
              transition: `opacity 200ms ease`,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: `relative`,
          overflow: `hidden`,
          ...getBorderRadius(showFileName),
        }}
      >
        <Box
          // Fix Firefox bug when div with overflow receives focus
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739
          // eslint-disable-next-line extra-rules/no-commented-out-code
          // tabIndex="-1"
          className={CONTAINER_CLASS}
          sx={{
            overflow: `auto`,
            scrollbarColor: `${primaryColor} ${grayColor}`,
            scrollbarWidth: `thin`,
            "&::-webkit-scrollbar": {
              height: 6,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: `gray`,
              borderRadius: 2,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `primary`,
              borderRadius: 2,
            },
            ...getBorderRadius(showFileName),
          }}
        >
          <Prism
            className={prismClassName}
            sx={{
              marginY: 0,
              padding: 3,
              float: `left`,
              minWidth: `100%`,
              ".highlight": {
                paddingX: 3,
                marginX: -3,
              },
            }}
            {...rest}
          >
            {children}
          </Prism>
        </Box>
      </Box>
    </Flex>
  )
}
export default CodeBlock
