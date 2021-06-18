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

const languageRegex = new RegExp(`language-`)
const highlightCommentRegex = new RegExp(
  `\/\/ highlight-((start|end)\n|line)`,
  `g`
)

const getLanguage = (className, regex = languageRegex) => {
  const firstClassName = className?.split(` `)[0]
  const isLanguageClassName = firstClassName?.match(regex)

  return isLanguageClassName ? firstClassName.replace(regex, ``) : null
}

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

  const language = getLanguage(prismClassName)
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
        backgroundColor: `muted`,
        borderRadius: 2,
        transition: `codeBlock`,
        "&:focus-visible": {
          ".language-label": {
            boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
            transition: `codeBlock`,
          },
          ".copy-button": {
            opacity: 1,
          },
        },
        "&:hover": {
          ".copy-button": {
            opacity: 1,
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
                position: `absolute`,
                bottom: `-2px`,
                right: 0,
                display: `inline-block`,
                width: `100%`,
                height: 4,
                backgroundColor: `muted`,
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
              top: 4,
              right: 2,
              zIndex: `codeBlockCopyButton`,
              transition: `codeBlockCopyButton`,
              opacity: 0,
              "&:focus-visible": {
                opacity: 1,
              },
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
          // `div` with overflow receives focus in Firefox
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739
          // Conditioanlly remove element from the tab order
          {...(isFirefox() && { tabIndex: `-1` })}
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
              float: `left`,
              marginY: 0,
              padding: 3,
              minWidth: `100%`,
              ".highlight": {
                marginX: -3,
                paddingX: 3,
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
