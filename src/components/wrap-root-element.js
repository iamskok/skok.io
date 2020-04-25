/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ColorModeProvider } from '@theme-ui/color-modes'
import PrismThemeProvider from './code-block/prism-theme-provider'
import ThemeUIProvider from './theme-ui-provider'

export const wrapRootElement = ({ element }) => {
  return (
    <PrismThemeProvider>
      <ThemeUIProvider element={element}>
        <ColorModeProvider>
          {element}
        </ColorModeProvider>
      </ThemeUIProvider>
    </PrismThemeProvider>
  )
}
