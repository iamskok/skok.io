/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { useThemeUI } from "theme-ui"

const Link = ({ children, to, ...rest }) => {
  const internal = /^\/(?!\/)/.test(to)
  const {
    theme: {
      styles: { a: linkStyles },
    },
  } = useThemeUI()

  if (internal) {
    return (
      <GatsbyLink to={to} {...rest} sx={linkStyles}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <Themed.a href={to} {...rest}>
      {children}
    </Themed.a>
  )
}

export default Link
