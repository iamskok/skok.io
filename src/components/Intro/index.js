/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const Intro = ({ children, ...rest }) => {
  const {
    components: {
      intro: { id },
    },
  } = useSiteMetadata()

  return (
    <Box id={id} sx={{ scrollMarginTop: 3 }} {...rest}>
      {children}
    </Box>
  )
}

export default Intro
