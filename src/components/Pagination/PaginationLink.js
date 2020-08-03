/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../Link"
import { useState } from "react"

const PaginationLink = ({ to, children }) => {
  const [highlight, setHighlight] = useState(false)
  const addHighlight = () => setHighlight(true)
  const removeHighlight = () => setHighlight(false)

  return (
    <Link
      to={to}
      onFocus={addHighlight}
      onBlur={removeHighlight}
      onTouchStart={addHighlight}
      onTouchEnd={removeHighlight}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      sx={{
        fontSize: 4,
        fontWeight: `bold`,
        color: highlight ? `secondary` : `text`,
        textDecoration: `none`,
        transition: `color 400ms ease`,
      }}
    >
      {children}
    </Link>
  )
}

export default PaginationLink
