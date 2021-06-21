const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const getToc = require("./src/utils/get-toc.js")

const PAGINATION_OFFSET = 20

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      value: `/blog${value}`,
      node,
    })
  }
}

const createBlog = (createPage, edges) => {
  createPaginatedPages(createPage, edges, `/blog`)
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

const createArticles = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const {
      fields: { slug: pathName },
      tableOfContents: { items: tocItems },
      frontmatter: { hasIntro },
    } = node
    const slug = pathName.replace(`/blog/`, ``).replace(`/`, ``)
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node

    const toc = getToc(tocItems, hasIntro)

    createPage({
      path: pathName,
      component: path.resolve(`src/templates/Article/index.js`),
      context: {
        id: node.id,
        slug,
        prev,
        next,
        toc,
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
            tableOfContents
            frontmatter {
              title
              description
              date
              published
              hasIntro
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const {
      allMdx: { edges },
    } = data

    createBlog(actions.createPage, edges)
    createArticles(actions.createPage, edges)
  })
