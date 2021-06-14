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
      "&:hover, &:focus, &:active": {
        paddingX: 2,
        marginX: -2,
        color: `secondary`,
        borderRadius: 2,
      },
    }}
  >
    {children}
  </Link>
)

export default PaginationLink
