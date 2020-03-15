/** @jsx jsx */
import { jsx } from 'theme-ui'

const LineTokens = ({ line, getTokenProps, lineNumbers }) => (
  line.map((token, key) => (
    <span
      {...getTokenProps({ token, key })}
      sx={{
        display: 'inline-block',
        transition: 'transform 400ms ease',
        transform: lineNumbers ? 'translateX(0)' : 'translateX(-40px)'
      }}
    />
  ))
)

export default LineTokens