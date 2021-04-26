/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const Container = ({ children }) => {
  return (
    <Box
      as="nav"
      sx={{
        position: [`relative`, `relative`, `fixed`],
        top: [0, 0, 6],
        right: [0, 0, 4],
        width: `tocContainer`,
        marginBottom: 4,
        // paddingLeft: 3,
      }}
    >
      {children}
    </Box>
  )
}

export default Container
