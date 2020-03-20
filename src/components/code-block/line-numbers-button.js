/** @jsx jsx */
import { jsx, Button } from 'theme-ui'

const LineNumbersButton = ({ onClick }) => {
  return (
    <Button
      title="Toggle line numbers"
      sx={{
        cursor: 'pointer',
        backgroundColor: 'secondary',
      }}
      onClick={onClick}
    >
      Line Numbers
    </Button>
  )
}

export default LineNumbersButton