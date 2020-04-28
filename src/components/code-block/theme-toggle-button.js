/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { useState } from 'react'
import { PrismThemeConsumer } from './prism-theme-provider'

const ThemeToggleButton = () => {
  const [turnCounter, setTurnCounter] = useState(0)
  const incrementTurnCounter = () => setTurnCounter(turnCounter + 1)

  return (
    <PrismThemeConsumer>
      {({ changePrismTheme }) => (
        <IconButton
          aria-label='Change code block syntax highlighting theme'
          sx={{
            variant: 'buttons.codeBlock',
          }}
          onClick={() => {
            changePrismTheme()
            incrementTurnCounter()
          }}
        >
          <svg
            viewBox='0 0 32 32'
            sx={{
              variant: 'buttons.iconSvgSm',
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

export default ThemeToggleButton