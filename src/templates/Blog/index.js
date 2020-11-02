/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import BlogCard from "../../components/BlogCard"

const Blog = ({ data: { allMdx }, pageContext: { pagination } }) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const articles = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id)
  )

  return (
    <Layout pageName="blog">
      <Styled.h1>Blog</Styled.h1>

      {articles.map(({ node: article }) => (
        <BlogCard key={article.id} article={article} />
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
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            coverAlt
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
