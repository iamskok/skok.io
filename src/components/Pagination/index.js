/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import Link from "./Link"

const Pagination = ({ next, previous }) => (
  <Flex sx={{ marginBottom: 4 }}>
    {previous && <Link to={previous}>Previous</Link>}
    <Box sx={{ marginX: `auto` }} />
    {next && <Link to={next}>Next</Link>}
  </Flex>
)

export default Pagination
