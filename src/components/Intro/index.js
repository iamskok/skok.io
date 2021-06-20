/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { INTRO_ID } from "../../utils/constants"

const Intro = ({ children, id = INTRO_ID, ...rest }) => (
  <Box id={id} sx={{ scrollMarginTop: 3 }} {...rest}>
    {children}
  </Box>
)

export default Intro
