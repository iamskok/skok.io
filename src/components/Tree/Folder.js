/** @jsx jsx */
import { useState, Children } from "react"
import { jsx, Box, Flex } from "theme-ui"
import { FcFolder as FolderIcon } from "react-icons/fc"
import { FcOpenedFolder as OpenedFolderIcon } from "react-icons/fc"

const Folder = ({ children, name, open = true }) => {
  const [isOpened, setIsOpened] = useState(open)

  const handleClick = () => setIsOpened(!isOpened)

  return (
    <Box>
      <Flex
        sx={{
          alignItems: `center`,
        }}
        onClick={handleClick}
      >
        {isOpened ? (
          <OpenedFolderIcon
            sx={{
              marginRight: 2,
              fontSize: theme => theme.sizes.treeIcon,
            }}
          />
        ) : (
          <FolderIcon
            sx={{
              marginRight: 2,
              fontSize: theme => theme.sizes.treeIcon,
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
