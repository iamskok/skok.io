/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"
import ColorModeButton from "./color-mode-button"

const Header = () => {
  const { navigation } = useSiteMetadata()

  return (
    <Flex
      as="header"
      sx={{
        display: `flex`,
        alignItems: `center`,
        paddingY: 1,
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
      <Box marginLeft="auto">
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
      <ColorModeButton />
    </Flex>
  )
}

export default Header
