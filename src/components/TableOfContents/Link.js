/** @jsx jsx */
import { jsx } from "theme-ui"

const Link = ({ url, title, active }) => (
  <a
    href={url}
    sx={{
      fontSize: 1,
      fontFamily: `code`,
      color: active ? `primary` : `text`,
      transition: `all 400ms ease`,
      transitionProperty: `opacity, color`,
      textDecoration: `none`,
      opacity: active ? 1 : `0.5`,
      "&:hover": {
        opacity: 1,
        color: `secondary`,
      },
    }}
  >
    {title}
  </a>
)

export default Link
