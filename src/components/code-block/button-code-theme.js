/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const ButtonCodeTheme = () => (
  <PrismThemeConsumer>
    {({ changePrismTheme }) => (
      <Button
        title="Change Code Color Mode"
        sx={{
          cursor: 'pointer',
          backgroundColor: 'secondary'
        }}
        onClick={changePrismTheme}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="currentcolor"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="none"
            stroke="currentcolor"
            stroke-width="4"
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

export default ButtonCodeTheme