/** @jsx jsx */
import { useState, Children } from "react"
import { jsx, Box, Flex } from "theme-ui"
import { FcFolder as FolderIcon } from "react-icons/fc"
import { FcOpenedFolder as OpenedFolderIcon } from "react-icons/fc"

const Folder = ({ children, name, open = true }) => {
  const [isOpened, setIsOpened] = useState(open)

  return (
    <Box>
      <Flex
        sx={{
          alignItems: `center`,
        }}
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? (
          <OpenedFolderIcon
            sx={{
              marginRight: 2,
              fontSize: theme => theme.sizes.treeIcons,
            }}
          />
        ) : (
          <FolderIcon
            sx={{
              marginRight: 2,
              fontSize: theme => theme.sizes.treeIcons,
            }}
          />
        )}
        {name}
      </Flex>
      <ul
        sx={{
          listStyle: `none`,
          marginY: 0,
          paddingLeft: 4,
        }}
      >
        {Children.map(children, child => (
          <li
            sx={{
              display: isOpened ? `flex` : `none`,
            }}
          >
            {child}
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default Folder
