/** @jsx jsx */
import { jsx, IconButton } from "theme-ui"
import SVG from "../SVG"

const IconLink = ({
  children,
  href,
  ariaLabel,
  rel = `noopener noreferrer`,
  target = `_blank`,
  ...rest
}) => (
  <IconButton
    as="a"
    rel={rel}
    target={target}
    href={href}
    aria-label={ariaLabel}
    sx={{
      color: `primary`,
      transition: `iconLink`,
      "&:hover": {
        color: `secondary`,
      },
    }}
    {...rest}
  >
    <SVG>{children}</SVG>
  </IconButton>
)

export default IconLink
