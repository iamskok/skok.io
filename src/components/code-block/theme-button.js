/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { useState } from 'react'
import { PrismThemeConsumer } from './prism-theme-provider'

const ThemeButton = () => {
  const [turnCounter, setTurnCounter] = useState(0)
  const incrementTurnCounter = () => setTurnCounter(turnCounter + 1)

  return (
    <PrismThemeConsumer>
      {({ changePrismTheme }) => (
        <IconButton
          aria-label='Change code block syntax highlighting theme'
          sx={{
            cursor: 'pointer',
            color: 'background',
            backgroundColor: 'secondary',
            padding: 0,
            width: 40,
            height: 40,
          }}
          onClick={() => {
            changePrismTheme()
            incrementTurnCounter()
          }}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 32 32'
            fill='currentcolor'
            sx={{
              display: 'flex',
              margin: '0 auto',
              transition: 'transform 400ms ease',
              transform: `rotate(${turnCounter * 180}deg)`
            }}
          >
            <circle
              cx='16'
              cy='16'
              r='14'
              fill='none'
              stroke='currentcolor'
              strokeWidth='4'
            ></circle>
            <path d='M 16 0 A 16 16 0 0 0 16 32 z'></path>
          </svg>
        </IconButton>
      )}
    </PrismThemeConsumer>
  )
}

export default ThemeButton