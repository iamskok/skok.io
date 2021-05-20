/** @jsx jsx */
import { useState } from "react"
import { jsx, Button, Box, Flex } from "theme-ui"
import Prism from "@theme-ui/prism"
import { FaClipboardCheck, FaClipboard } from "react-icons/fa"
import copyToClipboard from "./copy-to-clipboard"

// 1. Copy button
// 2. Line highlight
// 3. Line numbers
// 4. Language tag
// 5. File title

const highlightCommentRegex = new RegExp(
  `\/\/ highlight-((start|end)\n|line)`,
  `g`
)
const languageRegex = new RegExp(`language-`, ``)
// const fileNameRegex = new RegExp(`filename=`, ``)

const getBorderRadius = ({ element, showLanguage, showFilename }) => {
  if (element === `filename`) {
    return {
      borderTopLeftRadius: 2,
      borderTopRightRadius: showLanguage ? 0 : 2,
    }
  } else if (element === `prism`) {
    return {
      borderTopLeftRadius: showFilename ? 0 : 2,
      borderTopRightRadius: showFilename || showLanguage ? 0 : 2,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
    }
  } else {
    return {}
  }
}

// filaname
// language
const CodeBlock = props => {
  const {
    children,
    className,
    filename,
    copy = true,
    // id,
    // showCopy,
    // showLanguage,
    metastring,
    ...rest
  } = props

  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = () => {
    setIsCopied(true)
    copyToClipboard(children.replace(highlightCommentRegex, ``))
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }
  // When language is specified its going to be the first in the list
  const firstClassName = className?.split(` `)[0]
  const showLanguage = firstClassName?.match(languageRegex)
  const language = showLanguage && firstClassName.replace(languageRegex, ``)

  const showFilename = Boolean(filename)

  const showCopyButton = copy === `true` || copy === true

  const filenameBorderRadius = getBorderRadius({
    element: `filename`,
    showLanguage,
  })

  const prismBorderRadius = getBorderRadius({
    element: `prism`,
    showLanguage,
    showFilename,
  })

  return (
    <Flex
      sx={{
        // display: `flex`,
        flexDirection: `column`,
        position: `relative`,
        marginY: 4,
        // overflowX: `auto`,
      }}
    >
      {showLanguage && (
        <Box>
          <Box
            sx={{
              float: `right`,
              paddingX: 3,
              fontSize: 1,
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
              backgroundColor: `muted`,
            }}
          >
            {language}
          </Box>
        </Box>
      )}
      {showFilename && (
        <Flex
          sx={{
            flex: 1,
            justifyContent: `center`,
            fontSize: 1,
            width: `100%`,
            textAlign: `center`,
            backgroundColor: `muted`,
            ...filenameBorderRadius,
          }}
        >
          {filename}
        </Flex>
      )}
      {showCopyButton && (
        <Button
          onClick={handleCopyClick}
          aria-label={`${isCopied ? `Copied` : `Copy`} code block to clipboard`}
          sx={{
            position: `absolute`,
            top: `30px`,
            right: `10px`,
            fontSize: 1,
            paddingX: 1,
            paddingY: 1,
            lineHeight: 0,
            borderRadius: 2,
          }}
        >
          {isCopied ? <FaClipboardCheck /> : <FaClipboard />}
        </Button>
      )}
      <Box
        sx={{
          overflowX: `auto`,
          // position: `relative`,
          // ...containerBorderRadius,
        }}
      >
        <Prism
          className={className}
          sx={{
            marginY: 0,
            padding: 3,
            float: `left`,
            minWidth: `100%`,
            ...prismBorderRadius,
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
    </Flex>
  )
}

export default CodeBlock
