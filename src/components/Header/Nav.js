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
        "&:first-child": {
          marginRight: 2,
        },
        "&:last-child": {
          marginLeft: 2,
        },
      },
    }}
  >
    {links.map(({ to, label }) => (
      <li
        key={label}
        sx={{
          display: `inline-block`,
        }}
      >
        <Link
          to={to}
          sx={{
            variant: `links.nav`,
          }}
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
)

export default Nav
