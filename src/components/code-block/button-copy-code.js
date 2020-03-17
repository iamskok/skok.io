/** @jsx jsx */
import { jsx, Button } from 'theme-ui'

const ButtonCopyCode = ({ onClick }) => {
  return (
    <Button
      title="Copy code block"
      sx={{
        cursor: 'pointer',
        backgroundColor: 'secondary',
      }}
      onClick={onClick}
    >
      Copy
    </Button>
  )
}

export default ButtonCopyCode
