/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import icons from "./icons"

const getExtension = name => name.split(`.`).slice(-1)[0]
const getLogo = name => {
  if (name.includes(`package.json`)) {
    return `npm`
  }

  if (name.includes(`gatsby-`)) {
    return `gatsby`
  }

  if (name.match(/\.(gif|jpe?g|png|webp)$/i)) {
    return `image`
  }

  return getExtension(name)
}

const File = ({ name }) => {
  const Logo = icons[getLogo(name)] || icons[`file`]

  return (
    <Flex sx={{ alignItems: `center` }}>
      <Logo
        sx={{
          marginRight: 2,
          fontSize: theme => theme.sizes.treeIcons,
        }}
      />
      {name}
    </Flex>
  )
}

export default File
