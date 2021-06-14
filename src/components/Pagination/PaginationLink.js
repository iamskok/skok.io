/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../Link"

const PaginationLink = ({ to, children }) => (
  <Link
    to={to}
    sx={{
      paddingY: 1,
      paddingX: 2,
      marginY: -1,
      marginX: -2,
      fontSize: 4,
      fontWeight: `bold`,
      color: `primary`,
      textDecoration: `none`,
      transition: `paginationLink`,
      "&:hover, &:focus, &:active": {
        color: `secondary`,
        borderRadius: 2,
      },
    }}
  >
    {children}
  </Link>
)

export default PaginationLink
