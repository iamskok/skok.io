/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

const WebmentionTypeCount = ({ count, singular, plural }) => (
  <Flex
    sx={{
      flex: 1,
      justifyContent: `center`,
      fontSize: [`0.75rem`, `1rem`],
    }}
  >
    {count} {count === 1 ? singular : plural}
  </Flex>
)

export default WebmentionTypeCount
