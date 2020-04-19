import React from 'react'
import PrismThemeProvider from './code-block/prism-theme-provider'
// import FOUTProvider from './fout-provider'

export const wrapRootElement = ({ element }) => (
  <PrismThemeProvider>
    {element}
  </PrismThemeProvider>
)