import React from 'react'
import PrismThemeProvider from './src/components/code-block/prism-theme-provider'

export const wrapRootElement = ({ element }) => (
  <PrismThemeProvider>
    {element}
  </PrismThemeProvider>
)