/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import Link from "./link"

const Pagination = ({ previous, next }) => (
  <Flex
    sx={{
      marginX: [-2, -3],
      marginBottom: 4,
      rowGap: 2,
      flexDirection: `column`,
    }}
  >
    {previous && (
      <Link url={previous.url} title={previous.title} text="Previous" />
    )}
    {next && <Link url={next.url} title={next.title} text="Next" />}
  </Flex>
)

export default Pagination
