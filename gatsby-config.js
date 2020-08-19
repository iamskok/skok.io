const path = require("path")
const siteMetadata = require("./site-metadata")

const activeEnv = process.env.NODE_ENV

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const gatsbyRemarkPlugins = [
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
]

module.exports = {
  siteMetadata, // what's the point of this?
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(`./src/posts`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        // generate sitemap after moving on `skok.io`
        sitemap: null,
        // allow all after moving on `skok.io domain`
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: `skok.club`,
        identity: {
          twitter: `iamskok`,
          github: `iamskok`,
        },
        mentions: true,
        pingbacks: true,
        forwardPingbacksAsWebmentions: `https://brid.gy`,
        domain: `skok.club`,
        fetchLimit: 10000,
        token: process.env.WEBMENTION_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-webpack-size`,
    `gatsby-optional-chaining`,
  ],
}
