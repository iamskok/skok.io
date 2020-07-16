/** @jsx jsx */
import { useState } from "react"
import { jsx, IconButton } from "theme-ui"
import copyToClipboard from "./copy-to-clipboard"

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    copyToClipboard(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 10000)
  }

  return (
    <IconButton
      aria-label={`${copied ? "Copied" : "Copy"} code block to clipboard`}
      sx={{ variant: "buttons.icon" }}
      onClick={handleClick}
    >
      <svg
        width="23"
        height="36"
        viewBox="0 0 23 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.0833 12L23 7.2V33.6C22.9617 34.272 22.7892 34.848 22.425 35.28C22.0608 35.712 21.62 35.952 21.0833 36H1.91667C0.8625 36 0 34.92 0 33.6V7.2C0 5.88 0.8625 4.8 1.91667 4.8H7.66667C7.66667 2.136 9.3725 0 11.5 0C13.6275 0 15.3333 2.136 15.3333 4.8H21.0833C22.1375 4.8 23 5.88 23 7.2L21.0833 12H1.91667V33.6H21.0833V12ZM3.83333 9.6H19.1667C19.1667 8.28 18.3042 7.2 17.25 7.2H15.3333C14.2792 7.2 13.4167 6.12 13.4167 4.8C13.4167 3.48 12.5542 2.4 11.5 2.4C10.4458 2.4 9.58333 3.48 9.58333 4.8C9.58333 6.12 8.72083 7.2 7.66667 7.2H5.75C4.69583 7.2 3.83333 8.28 3.83333 9.6Z"
          fill="currentColor"
        />
        {
          Array(3).fill(0).map((_, index) => (
            <rect
              x="4"
              y={(15 + index * 7).toString()}
              width="15"
              height="2"
              fill={copied ? `currentColor` : `rgba(0,0,0,0)`}
              sx={{
                transitionProperty: `fill`,
                transitionDuration: `${200 * (index + 1)}ms`,
                transitionTimingFunction: `ease`
              }}
            />
          ))
        }
      </svg>
    </IconButton>
  )
}

export default CopyButton
