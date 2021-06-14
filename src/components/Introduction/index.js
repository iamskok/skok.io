/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const Introduction = ({ children }) => (
  <Box
    id="introduction"
    sx={{
      scrollMarginTop: 3,
    }}
  >
    {children}
  </Box>
)

export default Introduction
