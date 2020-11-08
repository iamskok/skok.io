const lineBreaksRegex = /\r?\n|\r/g
const svgTagRegex = /^<\s*svg[^>]*>(.*?)<\s*\/\s*svg>$/i
const quotesRegex = /\'|\"/g
const dataUrlPrefix = `data:image/svg+xml,`
const encodedQuote = `%22`

const normalizeSVG = str => str.replace(lineBreaksRegex, ``).trim()
const isSvg = str => svgTagRegex.test(normalizeSVG(str))

const setFavicon = favicon => {
  const links = document.querySelectorAll(`link[rel="icon"]`)

  Array.from(links).forEach(node => node.remove())
  const link = document.createElement(`link`)

  if (isSvg(favicon)) {
    const svg =
      dataUrlPrefix + normalizeSVG(favicon).replace(quotesRegex, encodedQuote)
    link.href = svg
  } else {
    link.href = favicon
  }

  link.rel = `icon`

  document.getElementsByTagName(`head`)[0].appendChild(link)
}

export default setFavicon
