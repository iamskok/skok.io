const config = require("./config")
const forceFileLoader = require("./gatsby/config/force-file-loader")
const robotsTxt = require("./gatsby/config/robots-txt")
const manifest = require("./gatsby/config/manifest")
const svgrSvgo = require("./gatsby/config/svgr-svgo")
const sharp = require("./gatsby/config/sharp")
const mdx = require("./gatsby/config/mdx")
const sourcePosts = require("./gatsby/config/source-posts")
const sourceImages = require("./gatsby/config/source-images")
const sitemap = require("./gatsby/config/sitemap")

module.exports = {
  siteMetadata: { ...config },
  plugins: [
    sourceImages,
    sourcePosts,
    mdx,
    sharp,
    svgrSvgo,
    manifest,
    sitemap,
    robotsTxt,
    forceFileLoader,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
