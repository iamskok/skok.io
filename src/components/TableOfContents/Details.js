/** @jsx jsx */
import { jsx } from "theme-ui"

const Details = ({ children }) => (
  <details open>
    <summary
      sx={{
        cursor: `pointer`,
        padding: 1,
        margin: -1,
        borderRadius: 1,
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
