/** @jsx jsx */
import { jsx, Button } from 'theme-ui'

const ButtonLineNumbers = ({ onClick }) => {
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

export default ButtonLineNumbers