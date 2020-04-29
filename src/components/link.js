/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { useThemeUI } from 'theme-ui'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  const { theme: { styles: { a: linkStyles } } } = useThemeUI()

  if (internal) {
    return (
      <GatsbyLink
        to={ to }
        { ...other }
        sx={ linkStyles }
      >
        { children }
      </GatsbyLink>
    )
  }

  return (
    <Styled.a
      href={ to }
      { ...other }
    >
      { children }
    </Styled.a>
  )
}

export default Link
