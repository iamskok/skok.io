/** @jsx jsx */
import { jsx } from "theme-ui"

const LineTokens = ({ line, getTokenProps }) =>
  line.map((token, key) => (
    <span key={key} {...getTokenProps({ token, key })} />
  ))

export default LineTokens
