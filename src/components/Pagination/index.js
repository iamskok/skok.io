/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import PaginationLink from "./PaginationLink"
import { baseThemeSettings } from "../../gatsby-plugin-theme-ui"

const { rythm } = baseThemeSettings

const Pagination = ({ next, previous }) => (
  <Flex
    sx={{
      justifyContent: `space-between`,
      marginBottom: rythm,
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
