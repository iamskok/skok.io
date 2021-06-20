/** @jsx jsx */
import { jsx } from "theme-ui"
import InternalLink from "../Link"

const Link = ({ url, title, isActive }) => (
  <InternalLink
    href={url}
    sx={{
      display: `flex`,
      fontSize: 1,
      fontFamily: `code`,
      color: isActive ? `primary` : `text`,
    }}
  >
    {title}
  </InternalLink>
)

export default Link
