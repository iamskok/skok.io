/** @jsx jsx */
import { jsx } from 'theme-ui'
import { lighten } from '@theme-ui/color'

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
    color: highlight ? lighten(`primary`, 0.15) : `primary`
  }}>
    {++index}
  </span>
)

export default LineNumber