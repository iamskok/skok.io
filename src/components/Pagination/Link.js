/** @jsx jsx */
import { jsx } from "theme-ui"
import InternalLink from "../Link"

const Link = ({ to, children }) => (
  <InternalLink
    to={to}
    sx={{
      fontSize: 3,
      fontWeight: `bold`,
    }}
  >
    {children}
  </InternalLink>
)

export default Link
