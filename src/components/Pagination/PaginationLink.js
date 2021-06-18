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
      borderRadius: 1,
      transition: `paginationLink`,
      "&:hover": {
        color: `secondary`,
      },
    }}
  >
    {children}
  </Link>
)

export default PaginationLink
