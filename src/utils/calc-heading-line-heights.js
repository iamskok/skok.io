import { baseThemeSettings } from "../theme"
import fontSizes from "../theme/tokens/font-sizes"
import unitless from "../utils/unitless"

const rythm = unitless(baseThemeSettings.rythm)

const calcHeadingLineHeights = () =>
  fontSizes.map(fz => {
    const fontSizeNum = unitless(fz)

    return (
      (Math.floor(fontSizeNum / rythm) + Math.ceil(fontSizeNum % rythm)) *
        rythm +
      `rem`
    )
  })

export default calcHeadingLineHeights
