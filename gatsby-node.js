const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const siteMetadata = require("./site-metadata")
const PAGINATION_OFFSET = 8

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: "slug",
      // Generated value based on filepath with "blog" prefix
      value: `/blog${value}`,
    })
  }
}

const createBlog = (createPage, edges) => {
  createPaginatedPages(createPage, edges, "/blog")
}

const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET)

    if (!acc[pageIndex]) {
      acc[pageIndex] = []
    }

    acc[pageIndex].push(value.node.id)

    return acc
  }, [])

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: path.resolve(`src/templates/Blog/index.js`),
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    })
  })
}

const createPosts = (createPage, edges) => {
  const { siteUrl } = siteMetadata
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const slug = node.fields.slug
    const permalink = `${siteUrl}${slug}`

    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/BlogPost/index.js`),
      context: {
        id: node.id,
        prev,
        next,
        permalink,
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            body
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date
              published
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const { edges } = data.allMdx

    createPosts(actions.createPage, edges)
    createBlog(actions.createPage, edges)
  })

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        buble$: path.resolve(
          __dirname,
          `node_modules/@philpl/buble/src/index.js`
        ),
      },
    },
  })
}

// https://github.com/ChristopherBiscardi/gatsby-mdx/issues/176#issuecomment-429569578
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}
