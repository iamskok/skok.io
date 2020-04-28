/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'
import ColorModeButton from './color-mode-button'

const Header = () => {
  const { navigation } = useSiteMetadata()

  return (
    <Flex
      as="header"
      sx={{
        display: `flex`,
        alignItems: `center`,
    }}>
      <Link
        to={`/`}
        sx={{
          variant: `links.nav`,
          marginLeft: 2 * -1
        }}
      >
        skok.io
      </Link>
      <Box
        marginLeft="auto"
        marginRight="1"
      >
        { navigation.map(({ to, label }) => (
          <Link
            key={`${label}`}
            to={`${to}`}
            sx={{
              variant: `links.nav`
            }}
          >
            {label}
          </Link>
        )) }
      </Box>
      <ColorModeButton />
    </Flex>
  )
}

export default Header