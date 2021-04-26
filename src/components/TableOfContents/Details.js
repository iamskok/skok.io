/** @jsx jsx */
import { jsx } from "theme-ui"

const Details = ({ children }) => {
  return (
    <details open>
      <summary
        sx={{
          cursor: `pointer`,
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
}

export default Details
