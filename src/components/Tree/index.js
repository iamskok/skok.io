/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import File from "./File"
import Folder from "./Folder"

const Tree = ({ children }) => <Box>{children}</Box>

Tree.file = File
Tree.folder = Folder

export default Tree
