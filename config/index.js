const seo = require("./seo")
const siteUrl = require("./site-url")
const pages = require("./pages")
const colorModes = require("./color-modes")
const favicons = require("./favicons")
const components = require("./components")

const config = {
  ...seo,
  siteUrl,
  pages,
  colorModes,
  favicons,
  components,
}

module.exports = config
