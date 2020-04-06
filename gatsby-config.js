const path = require('path')
const siteMetadata = require('./site-metadata')

const gatsbyRemarkPlugins = [
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1200,
      withWebp: true,
      quality: 100,
      loading: `lazy`,
      linkImagesToOriginal: false
    }
  }
]

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(`./src/posts`)
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `@skok/gatsby-plugin-preload-fonts`,
  ]
}
