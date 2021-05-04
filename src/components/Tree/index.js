/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import File from "./file"
import Folder from "./folder"

const Tree = ({ children }) => <Box>{children}</Box>

Tree.file = File
Tree.folder = Folder

export default Tree
