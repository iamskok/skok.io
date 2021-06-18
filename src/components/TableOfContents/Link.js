/** @jsx jsx */
import { jsx } from "theme-ui"

const Link = ({ url, title, isActive }) => (
  <a
    href={url}
    sx={{
      fontSize: 1,
      fontFamily: `code`,
      color: isActive ? `primary` : `text`,
      transition: `tableOfContentsLink`,
      textDecoration: `none`,
      display: `inline-block`,
      borderRadius: 1,
      "&:hover": {
        color: `secondary`,
      },
    }}
  >
    {title}
  </a>
)

export default Link
