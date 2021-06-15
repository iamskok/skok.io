/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../Link"

const PaginationLink = ({ to, children }) => (
  <Link
    to={to}
    sx={{
      fontSize: 4,
      fontWeight: `bold`,
      color: `primary`,
      textDecoration: `none`,
      transition: `paginationLink`,
      "&:hover": {
        color: `secondary`,
      },
      "&:focus": {
        paddingX: 2,
        marginX: -2,
        borderRadius: 2,
        boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
      },
    }}
  >
    {children}
  </Link>
)

export default PaginationLink
