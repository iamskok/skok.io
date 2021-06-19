/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../Link"

const Nav = ({ links }) => (
  <ul
    sx={{
      padding: 0,
      margin: 0,
      listStyle: `none`,
      li: {
        "&:first-of-type": {
          marginRight: 2,
        },
        "&:last-of-type": {
          marginLeft: 2,
        },
      },
    }}
  >
    {links.map(({ to, label }) => (
      <li key={label} sx={{ display: `inline-block` }}>
        <Link
          to={to}
          sx={{
            color: `primary`,
            textDecoration: `none`,
            textTransform: `uppercase`,
            borderRadius: 1,
            transition: `link`,
            "&:hover": {
              color: `secondary`,
            },
          }}
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
)

export default Nav
