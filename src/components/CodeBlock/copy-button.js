/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { FaClipboardCheck, FaClipboard } from "react-icons/fa"

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
        fontSize: 2,
        paddingX: 1,
        paddingY: 1,
        lineHeight: 0,
        transition: `codeBlockCopyButton`,
        "&:hover": {
          backgroundColor: `secondary`,
        },
        "&:focus": {
          boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
          opacity: 1,
        },
      }}
      {...rest}
    >
      {Icon}
    </Button>
  )
}

export default CopyButton
