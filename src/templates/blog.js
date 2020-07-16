/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import BlogPostCard from "../components/blog-post-card"

const Blog = ({ data: { allMdx }, pageContext: { pagination } }) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id)
  )

  return (
    <Layout>
      <Styled.h1>Blog</Styled.h1>

      {posts.map(({ node: post }) => (
        <BlogPostCard key={post.id} post={post} />
      ))}

      <Pagination previous={previousPagePath} next={nextPagePath} />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            cover {
              childImageSharp {
                sizes(maxWidth: 900) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
