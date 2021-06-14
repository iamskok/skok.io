/** @jsx jsx */
import { jsx } from "theme-ui"

const Link = ({ url, title, active }) => (
  <a
    href={url}
    sx={{
      fontSize: 1,
      fontFamily: `code`,
      color: active ? `primary` : `text`,
      transition: `tableOfContentsLink`,
      textDecoration: `none`,
      opacity: active ? 1 : 0.5,
      display: `inline-block`,
      "&:hover": {
        opacity: 1,
        color: `secondary`,
      },
      "&:focus": {
        padding: 1,
        margin: -1,
        borderRadius: 1,
      },
    }}
  >
    {title}
  </a>
)

export default Link
