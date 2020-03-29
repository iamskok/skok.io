import React from 'react'
import { Global, css } from '@emotion/core'
import interFontFaceStack from '../fonts/inter'

const FontFaceStacks = () => (
  <Global
    styles={css`
      ${interFontFaceStack}
    `}
  />
)

export default FontFaceStacks