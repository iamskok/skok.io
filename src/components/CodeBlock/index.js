/** @jsx jsx */
import { useState, useContext } from "react"
import { jsx, Box, Flex } from "theme-ui"
import Prism from "@theme-ui/prism"
import useSound from "use-sound"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import biteSound from "../../assets/sounds/bite.mp3"
import { isFirefox } from "../../utils/user-agent"
import {
  CODE_BLOCK_COPY_CLICK_TIMEOUT,
  CODE_BLOCK_CLASS_NAME,
  CODE_BLOCK_CONTAINER_CLASS_NAME,
} from "../../utils/constants"
import { SoundContext } from "../SoundProvider"
import copyToClipboard from "./copy-to-clipboard"
import CopyButton from "./copy-button"
import FileName from "./file-name"
import LanguageLabel from "./language-label"

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

// Calculate border radius styles based on the `FileName` presence
const getBorderRadius = isFileNameVisible => ({
  borderTopLeftRadius: isFileNameVisible ? 0 : 2,
  borderTopRightRadius: isFileNameVisible ? 0 : 2,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
})

const truthyList = [true, `true`]

const CodeBlock = props => {
  const [isCopied, setIsCopied] = useState(false)
  const [sound] = useContext(SoundContext)
  const [play] = useSound(biteSound)
  const {
    components: {
      codeBlock: { isCopy, isLabel, isFocus },
    },
  } = useSiteMetadata()

  const {
    id,
    children,
    fileName,
    className: prismClassName,
    copy = isCopy,
    label = isLabel,
    focus = isFocus,
    ...rest
  } = props

  const language = getLanguage(prismClassName, languageRegex)
  const isLanguageLabelVisible = truthyList.includes(label) && Boolean(language)
  const isFileNameVisible = Boolean(fileName)
  const isCopyButtonVisible = truthyList.includes(copy)
  const tabIndex = Number(truthyList.includes(focus)) - 1

  const handleCopyClick = () => {
    setIsCopied(true)
    copyToClipboard(children.replace(highlightCommentRegex, ``))

    if (sound) {
      play()
    }

    setTimeout(() => {
      setIsCopied(false)
    }, CODE_BLOCK_COPY_CLICK_TIMEOUT)
  }

  return (
    <Flex
      tabIndex={tabIndex}
      className={CODE_BLOCK_CLASS_NAME}
      {...(id && { id })}
      sx={{
        position: `relative`,
        flexDirection: `column`,
        marginTop: 5,
        marginBottom: 4,
        scrollMarginTop: 5,
        borderRadius: 2,
        backgroundColor: `muted`,
        "&:focus": {
          ".language-label": {
            boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
            transition: `codeBlockLanguageLabelIsFocused`,
          },
          ".copy-button": {
            opacity: `codeBlockCopyButtonIsFocused`,
          },
        },
        "&:hover": {
          ".copy-button": {
            opacity: `codeBlockCopyButtonIsHovered`,
          },
        },
        "&:active": {
          ".copy-button": {
            opacity: `codeBlockCopyButtonIsActive`,
          },
        },
      }}
    >
      <Box>
        {isLanguageLabelVisible && (
          <LanguageLabel
            language={language}
            className="language-label"
            sx={{
              position: `absolute`,
              right: 4,
              transform: `translateY(calc(-100% - 2px))`,
              "&:after": {
                content: `""`,
                width: `100%`,
                height: `codeBlockLanguageLabelAfter`,
                backgroundColor: `muted`,
                display: `inline-block`,
                position: `absolute`,
                bottom: `-2px`,
                right: 0,
              },
            }}
          />
        )}
        {isFileNameVisible && (
          <FileName
            fileName={fileName}
            sx={{
              borderTopRightRadius: 2,
              borderTopLeftRadius: 2,
            }}
          />
        )}
        {isCopyButtonVisible && (
          <CopyButton
            onClick={handleCopyClick}
            isCopied={isCopied}
            className="copy-button"
            sx={{
              position: `absolute`,
              zIndex: `codeBlockCopyButton`,
              top: 4,
              right: 2,
              opacity: `codeBlockCopyButton`,
              transition: `codeBlockCopyButton`,
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: `relative`,
          overflow: `hidden`,
          ...getBorderRadius(isFileNameVisible),
        }}
      >
        <Box
          // `div` with overflow styles receives focus in Firefox browser.
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739
          {...(isFirefox && { tabIndex: `-1` })}
          className={CODE_BLOCK_CONTAINER_CLASS_NAME}
          sx={{
            overflow: `auto`,
            scrollbarColor: ({ colors: { primary, gray } }) =>
              `${primary} ${gray}`,
            scrollbarWidth: `thin`,
            "&::-webkit-scrollbar": {
              height: `codeBlockScrollBar`,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: `gray`,
              borderRadius: 2,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `primary`,
              borderRadius: 2,
            },
            ...getBorderRadius(isFileNameVisible),
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
