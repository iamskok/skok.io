/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const LanguageLabel = ({ language, ...rest }) => (
  <Box
    sx={{
      userSelect: `none`,
      paddingX: 3,
      fontSize: 1,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      backgroundColor: `muted`,
    }}
    {...rest}
  >
    {language}
  </Box>
)

export default LanguageLabel
