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
      padding: 1,
      margin: -1,
      borderRadius: 1,
      "&:hover": {
        color: `secondary`,
      },
      "&:focus": {
        boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
      },
    }}
  >
    {title}
  </a>
)

export default Link
