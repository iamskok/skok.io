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
import Icon from "../Icon"

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

const AnimatedIcon = motion(Icon)

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
      aria-label="Change color mode"
      onClick={clickHandler}
      sx={{
        color: `primary`,
        transition: `colorModeButton`,
        "&:hover": {
          color: `secondary`,
        },
      }}
      {...props}
    >
      <AnimatedIcon
        as={motion.svg}
        viewBox="0 0 32 32"
        transition={{ duration }}
        animate={{
          rotate: iconAngle,
          originX: `center`,
          originY: `center`,
        }}
      >
        <circle
          sx={{
            cx: 16,
            cy: 16,
            r: 14,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: 4,
          }}
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </AnimatedIcon>
    </IconButton>
  )
}

export default ColorModeButton
