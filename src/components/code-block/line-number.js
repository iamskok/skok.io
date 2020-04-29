/** @jsx jsx */
import { jsx } from 'theme-ui'

const LineNumber = ({
  index,
  highlight = false
}) => (
  <span sx={{
    display: 'inline-block',
    width: 'lineNumber',
    userSelect: 'none',
    textAlign: 'center',
    marginRight: 2,
    color: highlight ? `prismHighlightNumber` : `primary`,
    marginLeft: highlight && -1
  }}>
    {++index}
  </span>
)

export default LineNumber