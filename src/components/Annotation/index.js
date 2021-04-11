/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { RoughNotation } from "react-rough-notation"
import { useInView } from "react-intersection-observer"

const options = {
  threshold: 0.1,
}

const Underline = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(options)

  return (
    <span ref={ref}>
      <RoughNotation
        type="underline"
        show={inView}
        color={primary}
        multiline={true}
        iterations={5}
        {...props}
      />
    </span>
  )
}

const Box = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(options)

  return (
    <span ref={ref}>
      <RoughNotation
        type="box"
        show={inView}
        color={primary}
        multiline={true}
        iterations={3}
        {...props}
      />
    </span>
  )
}
const Circle = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(options)

  return (
    <span ref={ref}>
      <RoughNotation
        type="circle"
        show={inView}
        color={primary}
        multiline={true}
        iterations={5}
        {...props}
      />
    </span>
  )
}
const Highlight = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(options)

  return (
    <span ref={ref}>
      <RoughNotation
        type="highlight"
        show={inView}
        color={primary}
        multiline={true}
        {...props}
      />
    </span>
  )
}
const StrikeThrough = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(options)

  return (
    <span ref={ref}>
      <RoughNotation
        type="strike-through"
        show={inView}
        color={primary}
        multiline={true}
        iterations={5}
        {...props}
      />
    </span>
  )
}
const CrossedOff = props => {
  const {
    theme: {
      colors: { primary },
    },
  } = useThemeUI()
  const { ref, inView } = useInView(options)

  return (
    <span ref={ref}>
      <RoughNotation
        type="crossed-off"
        show={inView}
        color={primary}
        multiline={true}
        iterations={5}
        {...props}
      />
    </span>
  )
}

export { Underline, Box, Circle, Highlight, StrikeThrough, CrossedOff }
