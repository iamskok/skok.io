/** @jsx jsx */
import { useState } from "react"
import { jsx, IconButton, useColorMode } from "theme-ui"
import useSiteMetadata from "../../hooks/use-site-metadata"

const ColorModeButton = props => {
  const { colorModes } = useSiteMetadata()
  const [colorMode, setColorMode] = useColorMode()
  const [turn, setTurn] = useState(0)
  const turnButton = () => setTurn(turn < 1 ? 1 : 0)

  return (
    <IconButton
      {...props}
      aria-label="Toggle website theme"
      onClick={() => {
        const index = colorModes.indexOf(colorMode)
        const next = colorModes[(index + 1) % colorModes.length]
        setColorMode(next)
        turnButton()
      }}
      sx={{
        cursor: `pointer`,
        padding: 0,
        width: `iconButton`,
        height: `iconButton`,
        marginX: 0,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentcolor"
        sx={{
          display: `flex`,
          margin: `0 auto`,
          transition: `transform 400ms ease`,
          transform: `rotate(${turn * 180}deg)`,
        }}
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path d="M 16 0 A 16 16 0 0 0 16 32 z"></path>
      </svg>
    </IconButton>
  )
}

export default ColorModeButton
