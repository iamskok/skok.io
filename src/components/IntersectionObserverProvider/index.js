import React, { createContext } from "react"

const IntersectionObserverContext = createContext()

const IntersectionObserverProvider = ({ children }) => {
  const [element, setElement] = useState()

  return (
    <IntersectionObserver.Provider value={[element, setElement]}>
      {children}
    </IntersectionObserver.Provider>
  )
}

export { IntersectionObserverContext, IntersectionObserverProvider }
