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
          marginLeft: -2,
          marginRight: 2,
          padding: 2,
        },
        "&:last-child": {
          marginLeft: 2,
          marginRight: -2,
          padding: 2,
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
            color: `primary`,
            textDecoration: `none`,
            textTransform: `uppercase`,
            borderRadius: 1,
            transition: `link`,
            "&:hover": {
              color: `secondary`,
            },
            "&:focus-visible": {
              boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
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
