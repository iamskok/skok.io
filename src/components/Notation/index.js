/** @jsx jsx */
import { useState, useContext, useEffect } from "react"
import { jsx, useThemeUI } from "theme-ui"
import { RoughNotation } from "react-rough-notation"
import { useInView } from "react-intersection-observer"
import { FontLoadContext } from "../FontLoadProvider"

const Notation = ({
  threshold = 0.1,
  triggerOnce = true,
  type = `underline`,
  multiline = false,
  iterations = 3,
  strokeWidth = 1,
  padding = [5, 5, 5, 5],
  brackets = null,
  animate = true,
  animationDelay = 200,
  animationDuration = 1200,
  color = null,
  ...rest
}) => {
  const isFontListLoaded = useContext(FontLoadContext)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })
  const [show, setShow] = useState(false)
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()

  useEffect(() => {
    setShow(show || (isFontListLoaded && inView))
  }, [inView, isFontListLoaded, show])

  return (
    <span ref={ref}>
      <RoughNotation
        type={type}
        multiline={multiline}
        iterations={iterations}
        strokeWidth={strokeWidth}
        padding={padding}
        brackets={brackets}
        animate={animate}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        color={color ? color : primary}
        show={show}
        {...rest}
      />
    </span>
  )
}

const Underline = props => <Notation {...props} multiline={true} />

const Box = props => <Notation {...props} type="box" />

const Circle = props => <Notation {...props} type="circle" />

const Highlight = props => (
  <Notation {...props} type="highlight" multiline={true} />
)

const StrikeThrough = props => (
  <Notation {...props} type="strike-through" multiline={true} strokeWidth={2} />
)

const CrossedOff = props => <Notation {...props} type="crossed-off" />

const BracketX = props => (
  <Notation
    {...props}
    type="bracket"
    brackets={[`left`, `right`]}
    strokeWidth={3}
  />
)

const BracketY = props => (
  <Notation
    {...props}
    type="bracket"
    brackets={[`top`, `bottom`]}
    strokeWidth={3}
  />
)

const BracketLeft = props => (
  <Notation {...props} type="bracket" brackets={`left`} strokeWidth={3} />
)

const BracketRight = props => (
  <Notation {...props} type="bracket" brackets={`right`} strokeWidth={3} />
)

export {
  Notation,
  Underline,
  Box,
  Circle,
  Highlight,
  StrikeThrough,
  CrossedOff,
  BracketX,
  BracketY,
  BracketLeft,
  BracketRight,
}
