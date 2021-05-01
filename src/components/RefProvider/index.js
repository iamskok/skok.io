import React, { createContext, useRef } from "react"

const RefContext = createContext()

const RefProvider = ({ children }) => {
  const headerRef = useRef()

  return (
    <RefContext.Provider
      value={{
        headerRef,
      }}
    >
      {children}
    </RefContext.Provider>
  )
}

export { RefContext, RefProvider }
