/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Intro = ({ children, ...rest }) => {
  const {
    components: {
      intro: { id },
    },
  } = useSiteMetadata()

  return (
    <Themed.p id={id} sx={{ scrollMarginTop: 3 }} {...rest}>
      {children}
    </Themed.p>
  )
}

export default Intro
