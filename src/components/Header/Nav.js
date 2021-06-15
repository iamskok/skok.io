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
            variant: `links.nav`,
            borderRadius: 1,
            margin: -1,
            padding: 1,
            transition: `
              color 400ms ease,
              box-shadow 400ms ease,
            `,
            "&:hover": {
              color: `secondary`,
            },
            "&:focus": {
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
