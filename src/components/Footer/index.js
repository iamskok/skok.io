/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = ({ copyrightYear }) => (
  <footer
    sx={{
      textAlign: `center`,
      padding: 1,
    }}
  >
    © Copyright {copyrightYear}
  </footer>
)

export default Footer
