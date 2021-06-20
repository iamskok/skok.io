/** @jsx jsx */
import { jsx } from "theme-ui"

const Details = ({ children }) => (
  <details open>
    <summary
      sx={{
        cursor: `pointer`,
        borderRadius: 1,
        transition: `tableOfContentsDetails`,
        "&:hover": {
          color: `secondary`,
        },
      }}
    >
      Table of Contents{` `}
      <span role="img" aria-label="Opened book emoji">
        📖
      </span>
    </summary>

    {children}
  </details>
)

export default Details
