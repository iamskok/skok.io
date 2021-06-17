/** @jsx jsx */
import { useState, useContext, useEffect, useRef } from "react"
import { jsx, IconButton, useColorMode } from "theme-ui"
import useSound from "use-sound"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import setFavicon from "../../utils/set-favicon"
import isWindow from "../../utils/is-window"
import switchOnSound from "../../assets/sounds/switch-on.mp3"
import { SoundContext } from "../SoundProvider"

const styleElement = isWindow() && document.createElement(`style`)

const ColorModeButton = props => {
  const [sound] = useContext(SoundContext)
  const [playSwitchOn] = useSound(switchOnSound)
  const [turn, setTurn] = useState(0)
  const [colorMode, setColorMode] = useColorMode()
  const {
    colorModes,
    favicons: { light: lightFavicon, dark: darkFavicon },
  } = useSiteMetadata()

  const turnButton = () => setTurn(Number(turn < 1))

  const clickHandler = () => {
    const index = colorModes.indexOf(colorMode)
    const next = colorModes[(index + 1) % colorModes.length]

    turnButton()
    setColorMode(next)

    if (next === `default`) {
      setFavicon(darkFavicon)
    } else {
      setFavicon(lightFavicon)
    }

    if (sound) {
      playSwitchOn()
    }
  }

  return (
    <IconButton
      aria-label="Toggle website theme"
      onClick={clickHandler}
      sx={{
        padding: 0,
        marginX: 0,
        width: `iconButton`,
        height: `iconButton`,
        color: `primary`,
        cursor: `pointer`,
        transition: `colorModeButton`,
        "&:hover": {
          color: `secondary`,
        },
        "&:focus": {
          boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
        },
      }}
      {...props}
    >
      <svg
        className="color-mode-button-svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentColor"
        sx={{
          display: `flex`,
          margin: `0 auto`,
          transition: `colorModeButtonSvg`,
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
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </IconButton>
  )
}

export default ColorModeButton
