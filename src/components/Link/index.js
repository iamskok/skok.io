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

  const styles = {
    linkStyles,
    transition: `link`,
    "&:hover": {
      color: `secondary`,
    },
    "&:focus": {
      margin: -1,
      padding: 1,
      borderRadius: 1,
      boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
    },
  }

  const url = href || to
  const isExternal = isAbsoluteURL(url)

  return isExternal ? (
    <ThemeUILink href={url} sx={styles} {...rest} />
  ) : (
    <GatsbyLink to={url} sx={styles} {...rest} />
  )
}

export default Link
