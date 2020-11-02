/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Nav = ({ links }) => {
  return (
    <ul
      sx={{
        padding: 0,
        margin: 0,
        listStyle: `none`,
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
}

export default Nav
