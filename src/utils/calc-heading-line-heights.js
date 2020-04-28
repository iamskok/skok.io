import { baseThemeSettings } from '../gatsby-plugin-theme-ui'
import fontSizes from '../gatsby-plugin-theme-ui/tokens/font-sizes'
import unitless from '../utils/unitless'

const rythm = unitless(baseThemeSettings.rythm)

const calcHeadingLineHeights = () =>
  fontSizes.map(fz => {
    const fontSizeNum = unitless(fz)

    return (
      Math.floor(fontSizeNum / rythm) +
      Math.ceil(fontSizeNum % rythm)
    ) * rythm + `rem`
  })

export default calcHeadingLineHeights