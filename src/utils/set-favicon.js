const lineBreaksRegex = /\r?\n|\r/g
const svgTagRegex = /<\s*svg[^>]*>(.*?)<\s*\/\s*svg>/gi
const quotesRegex = /\'|\"/g
const dataURLPrefix = `data:image/svg+xml,`
const encodedQuote = `%22`

const isSvg = str => svgTagRegex.test(str.replace(lineBreaksRegex, ""))

const setFavicon = favicon => {
  const links = document.querySelectorAll(`link[rel="icon"]`)

  Array.from(links).forEach(node => node.remove())
  const link = document.createElement(`link`)

  if (isSvg(favicon)) {
    const svg =
      dataURLPrefix +
      favicon.replace(quotesRegex, encodedQuote).replace(lineBreaksRegex, "")
    link.href = svg
  } else {
    link.href = favicon
  }

  link.rel = `icon`

  document.getElementsByTagName(`head`)[0].appendChild(link)
}

export default setFavicon
