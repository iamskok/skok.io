/** @jsx jsx */
import { jsx } from 'theme-ui'

const LineTokens = ({ line, getTokenProps }) => (
  line.map((token, key) => (
    <span {...getTokenProps({ token, key })} />
  ))
)

export default LineTokens