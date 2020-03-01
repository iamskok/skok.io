import React from 'react'
const PrismContext = React.createContext({})

export const wrapRootElement = ({ element }) => (
  <PrismContext.Provider>
    {element}
  </PrismContext.Provider>
)