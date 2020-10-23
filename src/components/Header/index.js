/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import ColorModeButton from "../ColorModeButton"
import SoundModeButton from "../SoundModeButton"
import TwitterIconLink from "../TwitterIconLink"
import GithubIconLink from "../GithubIconLink"

const Header = () => {
  const { navigation } = useSiteMetadata()

  return (
    <Flex
      as="header"
      sx={{
        display: `flex`,
        alignItems: `center`,
        paddingY: 1,
        marginBottom: 5,
      }}
    >
      <Link
        to={`/`}
        sx={{
          variant: `links.nav`,
          margin: 0,
        }}
      >
        VS
      </Link>
      <Box
        sx={{
          marginLeft: `auto`,
        }}
      >
        <ul
          sx={{
            padding: 0,
            margin: 0,
            listStyle: `none`,
          }}
        >
          {navigation.map(({ to, label }) => (
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
      </Box>
      <ul
        sx={{
          padding: 0,
          margin: 0,
          listStyle: `none`,
          display: `flex`,
        }}
      >
        <li>
          <TwitterIconLink />
        </li>
        <li>
          <GithubIconLink />
        </li>
        <li>
          <ColorModeButton />
        </li>
        <li>
          <SoundModeButton />
        </li>
      </ul>
    </Flex>
  )
}

export default Header
