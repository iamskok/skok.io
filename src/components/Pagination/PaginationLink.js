/** @jsx jsx */
import { jsx } from "theme-ui"
import Link from "../Link"
import { useState } from "react"

const PaginationLink = ({ to, children }) => {
  const [touchStart, setTouchStart] = useState(false)
  const addColor = () => setTouchStart(true)
  const removeColor = () => setTouchStart(false)

  return (
    <Link
      to={to}
      onTouchStart={addColor}
      onTouchEnd={removeColor}
      sx={{
        fontSize: 4,
        fontWeight: `bold`,
        color: touchStart ? `secondary` : `text`,
        textDecoration: `none`,
        transition: `color 400ms ease`,
      }}
    >
      {children}
    </Link>
  )
}

export default PaginationLink