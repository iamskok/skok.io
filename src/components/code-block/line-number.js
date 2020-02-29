/** @jsx jsx */
import { jsx } from 'theme-ui'

const LineNumber = ({ index }) => (
  <span sx={{
    display: 'inline-block',
    width: '1.8em',
    userSelect: 'none',
    textAlign: 'center',
    opacity: 0.25,
    backgroundColor: 'black',
  }}>
    {++index}
  </span>
)

export default LineNumber