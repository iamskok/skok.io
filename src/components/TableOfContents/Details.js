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
        "&:hover": {
          padding: 1,
          margin: -1,
          borderRadius: 1,
          color: `secondary`,
        },
        "&:focus": {
          boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
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
