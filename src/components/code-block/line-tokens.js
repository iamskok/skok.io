/** @jsx jsx */
import { jsx } from 'theme-ui'

const LineTokens = ({ line, getTokenProps }) => (
  line.map((token, key) => (
    <span
      {...getTokenProps({ token, key })}
      sx={{ display: 'inline-block' }}
    />
  ))
)

export default LineTokens