/** @jsx jsx */
import { jsx } from "theme-ui"
import { ColorModeProvider } from "@theme-ui/color-modes"
import ThemeUIProvider from "../ThemeUIProvider"

export const wrapRootElement = ({ element }) => (
  <ThemeUIProvider element={element}>
    <ColorModeProvider />
  </ThemeUIProvider>
)
