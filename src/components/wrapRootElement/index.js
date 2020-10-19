import React from "react"
import { SoundProvider } from "../SoundProvider"

export const wrapRootElement = ({ element }) => (
  <SoundProvider>{element}</SoundProvider>
)
