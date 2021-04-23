const path = require("path")
const remarkSlug = require("remark-slug")
const siteMetadata = require("./site-metadata")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { siteUrl } = siteMetadata

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`./src/assets/images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(`./posts`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [remarkSlug],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: true,
              quality: 100,
              loading: `lazy`,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-svgr-svgo`,
      options: {
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgo: false,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vladimir Skok`,
        short_name: `VS`,
        description: `Personal blog about web development.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#11e`,
        display: `standalone`,
        icon: `static/favicon-dark.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [
          {
            userAgent: `*`,
            disallow: [`/`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [`fonts`],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
  ],
}
