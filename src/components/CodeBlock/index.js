/** @jsx jsx */
import { useState } from "react"
import { jsx, Button, Box, Flex } from "theme-ui"
import Prism from "@theme-ui/prism"
import { FaClipboardCheck, FaClipboard } from "react-icons/fa"
import copyToClipboard from "./copy-to-clipboard"

const languageRegex = new RegExp(`language-`, ``)
const highlightCommentRegex = new RegExp(
  `\/\/ highlight-((start|end)\n|line)`,
  `g`
)

const getBorderRadius = ({ component, showLanguageTab, showFileName }) => {
  if (component === `FileName`) {
    return {
      borderTopLeftRadius: 2,
      borderTopRightRadius: showLanguageTab ? 0 : 2,
    }
  } else if (component === `OverflowHidden`) {
    return {
      borderTopLeftRadius: showFileName ? 0 : 2,
      borderTopRightRadius: showFileName || showLanguageTab ? 0 : 2,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
    }
  } else {
    return {}
  }
}

const getLanguage = (className, languageRegex) => {
  const firstClassName = className?.split(` `)[0]
  const isLanguageClassName = firstClassName?.match(languageRegex)

  return isLanguageClassName ? firstClassName.replace(languageRegex, ``) : null
}

const CodeBlock = ({
  children,
  className,
  fileName,
  id,
  showCopy = true,
  showLanguage = true,
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyClick = () => {
    setIsCopied(true)
    copyToClipboard(children.replace(highlightCommentRegex, ``))
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  const language = getLanguage(className, languageRegex)

  const showLanguageTab =
    (showLanguage === `true` || showLanguage === true) && Boolean(language)
  const showFileName = Boolean(fileName)
  const showCopyButton = showCopy === `true` || showCopy === true

  const borderRadius = {
    fileName: getBorderRadius({
      component: `FileName`,
      showLanguageTab,
    }),
    overflowHidden: getBorderRadius({
      component: `OverflowHidden`,
      showLanguageTab,
      showFileName,
    }),
  }

  const elementId = id ? { id } : {}

  return (
    <Flex
      sx={{
        flexDirection: `column`,
        position: `relative`,
        marginTop: 5,
        marginBottom: 4,
        scrollMarginTop: 5,
      }}
      {...elementId}
    >
      <Box>
        {showLanguageTab && (
          <LanguageTab
            language={language}
            sx={{
              position: `absolute`,
              right: 0,
              transform: `translateY(-100%)`,
            }}
          />
        )}
        {showFileName && (
          <FileName fileName={fileName} sx={{ ...borderRadius.fileName }} />
        )}
        {showCopyButton && (
          <CopyButton
            onClick={handleCopyClick}
            isCopied={isCopied}
            sx={{
              position: `absolute`,
              top: 4,
              right: 2,
            }}
          />
        )}
      </Box>
      <OverflowHidden sx={{ ...borderRadius.overflowHidden }}>
        <Box sx={{ overflowX: `auto` }}>
          <Prism
            className={className}
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
      </OverflowHidden>
    </Flex>
  )
}

const CopyButton = ({ isCopied, onClick, ...rest }) => {
  const Icon = isCopied ? <FaClipboardCheck /> : <FaClipboard />
  const ariaLabel = isCopied
    ? `Code block is copied to clipboard`
    : `Copy code block to clipboard`

  return (
    <Button
      onClick={onClick}
      aria-label={ariaLabel}
      sx={{
        fontSize: 1,
        paddingX: 1,
        paddingY: 1,
        lineHeight: 0,
        borderRadius: 2,
      }}
      {...rest}
    >
      {Icon}
    </Button>
  )
}

const LanguageTab = ({ language, ...rest }) => {
  return (
    <Box
      sx={{
        userSelect: `none`,
        paddingX: 3,
        fontSize: 1,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        backgroundColor: `muted`,
      }}
      {...rest}
    >
      {language}
    </Box>
  )
}

const FileName = ({ fileName, ...rest }) => (
  <Flex
    sx={{
      flex: 1,
      justifyContent: `center`,
      fontSize: 1,
      width: `100%`,
      textAlign: `center`,
      backgroundColor: `muted`,
    }}
    {...rest}
  >
    {fileName}
  </Flex>
)

const OverflowHidden = ({ children, ...rest }) => (
  <Box sx={{ overflow: `hidden` }} {...rest}>
    {children}
  </Box>
)

export default CodeBlock
