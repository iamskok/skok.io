import React, { useState } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"

const SoundContext = React.createContext()

const SoundProvider = ({ children }) => {
  const [sound, setSound] = useLocalStorage(`sound-mode`, () => true)

  return (
    <SoundContext.Provider value={[sound, setSound]}>
      {children}
    </SoundContext.Provider>
  )
}

export { SoundContext, SoundProvider }
