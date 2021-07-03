/** @jsx jsx */
import { Button, Flex, Box, jsx } from "theme-ui"

const Link = ({ url, title, text, ...rest }) => (
  <Button
    as="a"
    href={url}
    sx={{
      display: `flex`,
      flexDirection: `column`,
      width: [`auto`, `50%`],
      backgroundColor: `transparent`,
      textAlign: [`left`, `center`],
      transition: `paginationLink`,
      alignSelf: [`auto`, `flex-start`],
      color: `text`,
      "&:hover": {
        backgroundColor: `primary`,
      },
    }}
    {...rest}
  >
    <Flex sx={{ flexDirection: `column` }}>
      <Box sx={{ variant: `text.code` }}>{text}</Box>
      <Box as="h3" sx={{ variant: `text.body`, fontWeight: `body` }}>
        {title}
      </Box>
    </Flex>
  </Button>
)

export default Link
