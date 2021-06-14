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
      opacity: active ? `linkActive` : `link`,
      display: `inline-block`,
      "&:hover, &:active, &:focus": {
        padding: 1,
        margin: -1,
        borderRadius: 1,
        opacity: `linkActive`,
        color: `secondary`,
      },
    }}
  >
    {title}
  </a>
)

export default Link
