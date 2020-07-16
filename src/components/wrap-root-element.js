/** @jsx jsx */
import { jsx } from "theme-ui"
import { ColorModeProvider } from "@theme-ui/color-modes"
import ThemeUIProvider from "./theme-ui-provider"

export const wrapRootElement = ({ element }) => (
  <ThemeUIProvider element={element}>
    <ColorModeProvider />
  </ThemeUIProvider>
)
