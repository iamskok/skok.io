/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Link as ThemeUILink } from "theme-ui"
import isAbsoluteURL from "is-absolute-url"

const Link = ({ href, to, ...rest }) => {
  const {
    theme: {
      styles: { a: linkStyles },
    },
  } = useThemeUI()

  const url = href || to
  const isExternal = isAbsoluteURL(url)

  return isExternal ? (
    <ThemeUILink href={url} {...rest} />
  ) : (
    <GatsbyLink to={url} sx={linkStyles} {...rest} />
  )
}

export default Link
