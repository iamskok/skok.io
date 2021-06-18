/** @jsx jsx */
import { jsx } from "theme-ui"

const Details = ({ children }) => (
  <details open>
    <summary
      sx={{
        cursor: `pointer`,
        borderRadius: 1,
        "&:hover": {
          color: `secondary`,
        },
        "&:focus-visible": {
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
