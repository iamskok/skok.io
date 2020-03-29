import React from 'react'
import { Global, css } from '@emotion/core'
import interFontFaceStack from '../fonts'

const FontFaceStacks = () => (
  <Global
    styles={css`
      ${interFontFaceStack}
    `}
  />
)

export default FontFaceStacks