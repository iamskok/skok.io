/** @jsx jsx */
import { useState, useEffect } from "react"
import { jsx, Progress as ThemeUIProgress } from "theme-ui"

const Progress = ({ value }) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(value > 0 ? 1 : 0)
  }, [value])

  return (
    <ThemeUIProgress
      max={1}
      value={value}
      sx={{
        position: `fixed`,
        zIndex: `progress`,
        borderRadius: 0,
        opacity: opacity,
        pointerEvents: `none`,
        transition: `opacity 200ms ease`,
        "&::-webkit-progress-bar": {
          transition: `width 400ms ease`,
        },
        "&::-webkit-progress-value": {
          transition: `width 400ms ease`,
        },
        "&::-moz-progress-bar": {
          transition: `width 400ms ease`,
        },
      }}
    />
  )
}

export default Progress
