/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => (
  <footer
    sx={{
      textAlign: `center`,
      padding: 1,
    }}
  >
    © Copyright {new Date().getFullYear()}
  </footer>
)

export default Footer
