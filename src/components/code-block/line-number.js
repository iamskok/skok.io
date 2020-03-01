/** @jsx jsx */
import { jsx } from 'theme-ui'

const LineNumber = ({ index, totalLineLength }) => (
  <span sx={{
    display: 'inline-block',
    width: 40,
    userSelect: 'none',
    textAlign: 'center',
    opacity: 0.25,
    backgroundColor: 'black',
    marginLeft: -20,
    marginRight: 20,
    transform: `translateX(-20)`
  }}>
    {++index}
  </span>
)

export default LineNumber