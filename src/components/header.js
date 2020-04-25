/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'
import ColorModeButton from './color-mode-button'

const Header = () => {
  const { navigation } = useSiteMetadata()

  return (
    <nav sx={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Link to={`/`}>skok.io</Link>
      { navigation.map(({ to, label }) => (
        <Link
          key={`${label}`}
          to={`${to}`}
        >
          {label}
        </Link>
      )) }
      <ColorModeButton />
    </nav>
  )
}

export default Header