/** @jsx jsx */
import { useState, useContext, useEffect } from "react"
import { jsx, IconButton, useColorMode, useThemeUI } from "theme-ui"
import useSound from "use-sound"
import { motion } from "framer-motion"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import setFavicon from "../../utils/set-favicon"
import isWindow from "../../utils/is-window"
import switchOnSound from "../../assets/sounds/switch-on.mp3"
import { SoundContext } from "../SoundProvider"

const disableAllTransitionStyles = `* {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
const styleElement = isWindow() && document.createElement(`style`)
const disableAllTransitions = () => {
  styleElement.appendChild(document.createTextNode(disableAllTransitionStyles))
  document.head.appendChild(styleElement)
}
const enableAllTransitions = () => styleElement.remove()

const ColorModeButton = props => {
  const [sound] = useContext(SoundContext)
  const [playSwitchOn] = useSound(switchOnSound)
  const [iconAngle, setIconAngle] = useState(0)
  const [colorMode, setColorMode] = useColorMode()
  const [isInColorModeTransition, setIsInColorModeTransition] = useState(false)
  const {
    colorModes,
    favicons: { light: lightFavicon, dark: darkFavicon },
  } = useSiteMetadata()
  const {
    theme: {
      transitionDurations: [duration],
    },
  } = useThemeUI()

  useEffect(() => {
    if (isInColorModeTransition) {
      enableAllTransitions()
      setIsInColorModeTransition(false)
    }
  }, [isInColorModeTransition])

  const rotateIcon = () => setIconAngle(iconAngle === 0 ? 180 : 0)

  const clickHandler = () => {
    const currentThemeIndex = colorModes.indexOf(colorMode)
    const nextTheme = colorModes[(currentThemeIndex + 1) % colorModes.length]

    rotateIcon()
    disableAllTransitions()
    setColorMode(nextTheme)
    setIsInColorModeTransition(true)

    if (nextTheme === `default`) {
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
        transition: `colorModeButton`,
        "&:hover": {
          color: `secondary`,
        },
      }}
      {...props}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentColor"
        transition={{ duration }}
        animate={{
          rotate: iconAngle,
          originX: `50%`,
          originY: `50%`,
        }}
        sx={{
          display: `flex`,
          margin: `0 auto`,
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
      </motion.svg>
    </IconButton>
  )
}

export default ColorModeButton
