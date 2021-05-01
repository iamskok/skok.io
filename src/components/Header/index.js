/** @jsx jsx */
import { useContext } from "react"
import { jsx, Flex } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { RefContext } from "../RefProvider"
import Nav from "./Nav"
import SideNav from "./SideNav"

const Header = () => {
  const { pages } = useSiteMetadata()
  const { headerRef } = useContext(RefContext)

  const links = Object.keys(pages)
    .map(page => pages[page])
    .filter(page => page?.order)
    .sort((a, b) => a.order - b.order)

  return (
    <Flex
      as="header"
      ref={headerRef}
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
