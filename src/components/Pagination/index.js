/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import PaginationLink from "./PaginationLink"

const Pagination = ({ next, previous }) => (
  <Flex
    sx={{
      justifyContent: `space-between`,
      marginBottom: 4,
    }}
  >
    <Flex
      sx={{
        flex: 1,
      }}
    >
      {previous && <PaginationLink to={previous}>Previous</PaginationLink>}
    </Flex>

    <Flex
      sx={{
        flex: 1,
        flexDirection: `row-reverse`,
      }}
    >
      {next && <PaginationLink to={next}>Next</PaginationLink>}
    </Flex>
  </Flex>
)

export default Pagination
