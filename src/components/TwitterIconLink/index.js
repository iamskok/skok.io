/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const TwitterIconLink = () => {
  const [highlight, setHighlight] = useState(false)
  const addHighlight = () => setHighlight(true)
  const removeHighlight = () => setHighlight(false)

  const {
    socialMedia: { twitter: twitterUrl },
  } = useSiteMetadata()

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={twitterUrl}
      aria-label="Navigate to Vladimir's Twitter account"
      onFocus={addHighlight}
      onBlur={removeHighlight}
      onTouchStart={addHighlight}
      onTouchEnd={removeHighlight}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      sx={{
        display: `flex`,
        alignItems: `center`,
        cursor: `pointer`,
        marginX: 0,
        padding: 0,
        width: `iconButton`,
        height: `iconButton`,
        color: highlight ? `secondary` : `primary`,
        transition: `color 400ms ease`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        sx={{
          display: `flex`,
          margin: `0 auto`,
          fill: `currentColor`,
        }}
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    </a>
  )
}

export default TwitterIconLink
