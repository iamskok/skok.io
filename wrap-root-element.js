import React from 'react'
import ThemeManager from './src/components/code-block/theme-manager'

export const wrapRootElement = ({ element }) => (
  <ThemeManager>
    {element}
  </ThemeManager>
)