/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Nav from "./Nav"
import SideNav from "./SideNav"

const Header = () => {
  const { pages } = useSiteMetadata()

  // Sort and hide unrequired nav links.
  const links = Object.keys(pages)
    .map(page => pages[page])
    .filter(page => page?.order)
    .sort((a, b) => a.order - b.order)

  return (
    <Flex
      as="header"
      sx={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        paddingY: 1,
        marginBottom: 5,
      }}
    >
      <Nav links={links} />
      <SideNav />
    </Flex>
  )
}

export default Header
