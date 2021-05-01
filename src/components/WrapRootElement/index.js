import React from "react"
import { SoundProvider } from "../SoundProvider"
import { RefProvider } from "../RefProvider"

export const wrapRootElement = ({ element }) => (
  <RefProvider>
    <SoundProvider>{element}</SoundProvider>
  </RefProvider>
)
