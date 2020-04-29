/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useState } from 'react'

const StyledButton = ({ children }) => {
  const [touchStart, setTouchStart] = useState(false)
  const addBackgroundColor = () => setTouchStart(true)
  const removeBackgroundColor = () => setTouchStart(false)

  return (
    <Button
      onTouchStart={ addBackgroundColor }
      onTouchEnd={ removeBackgroundColor }
      sx={{
        backgroundColor: touchStart ? `secondary` : `primary`,
        transition: `background-color 400ms ease`
      }}
    >
      {children}
    </Button>
  )
}

export default StyledButton