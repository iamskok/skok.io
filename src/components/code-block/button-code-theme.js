/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useState } from 'react'
import { PrismThemeConsumer } from './prism-theme-provider'

const ButtonCodeTheme = () => {
  const [isRotated, setRotated] = useState(false)
  const rotate = () => setRotated(!isRotated)

  return (
    <PrismThemeConsumer>
      {({ changePrismTheme }) => (
        <Button
          title="Change Code Color Mode"
          sx={{
            cursor: 'pointer',
            backgroundColor: 'secondary',
            padding: 0,
            width: 40,
            height: 40,
          }}
          onClick={() => {
            changePrismTheme();
            rotate()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="currentcolor"
            sx={{
              display: 'flex',
              margin: '0 auto',
              transition: 'transform 400ms ease',
              transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          >
            <circle
              cx="16"
              cy="16"
              r="14"
              fill="none"
              stroke="currentcolor"
              strokeWidth="4"
            ></circle>
            <path d="M 16 0 A 16 16 0 0 0 16 32 z"></path>
          </svg>
          <span sx={{
            position: 'absolute',
            top: -9999,
            width: 1,
            height: 1,
            overflow: 'hidden'
          }}>
            Change Code Color Mode
          </span>
        </Button>
      )}
    </PrismThemeConsumer>
  )
}

export default ButtonCodeTheme