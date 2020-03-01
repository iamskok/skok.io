import React from 'react'
import PrismContext from './src/components/code-block/prism-context'

export const wrapRootElement = ({ element }) => (
  <PrismContext.Provider value={{ name: "real btn" }}>
    {element}
  </PrismContext.Provider>
)