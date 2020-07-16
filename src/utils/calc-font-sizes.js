import ms from "modularscale"

// Calculate font sizes based on the ratio
// for every value with-in the range
const calcfontSizes = (ratio, range) => {
  const start = range[0]
  const end = range[1]
  const fontSizes = []

  for (let i = start; i < end + 1; i++) {
    const fz = ms(i, ratio) + `rem`
    fontSizes.push(fz)
  }

  return fontSizes
}

export default calcfontSizes
