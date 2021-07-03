/** @jsx jsx */
import { Button, Flex, Box, jsx } from "theme-ui"

const Link = ({ url, title, text, ...rest }) => (
  <Button
    as="a"
    href={url}
    sx={{
      display: `flex`,
      flexDirection: `column`,
      width: `100%`,
      backgroundColor: `transparent`,
      textAlign: `left`,
      transition: `paginationLink`,
      paddingX: [2, 3],
      color: `text`,
      "&:hover": {
        backgroundColor: `primary`,
      },
    }}
    {...rest}
  >
    <Flex sx={{ flexDirection: `column` }}>
      <Box
        sx={{
          variant: `text.code`,
          fontSize: 1,
        }}
      >
        {text}
      </Box>
      <Box
        sx={{
          variant: `text.body`,
          fontSize: 2,
          fontWeight: `body`,
        }}
      >
        {title}
      </Box>
    </Flex>
  </Button>
)

export default Link
