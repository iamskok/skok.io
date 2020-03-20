/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import copyToClipboard from './copy-to-clipboard'

const CopyButton = ({ code }) => {
  const handleCopy = () => copyToClipboard(code)

  return (
    <Button
      title="Copy code block"
      sx={{
        cursor: 'pointer',
        backgroundColor: 'secondary',
      }}
      onClick={handleCopy}
    >
      Copy
    </Button>
  )
}

export default CopyButton
