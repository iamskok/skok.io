/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import BlogCard from "../../components/BlogCard"

const Blog = ({
  data: {
    allMdx,
    site: {
      siteMetadata: {
        pages: {
          blog: { to, breadcrumb, title, description, cover, coverAlt, type },
        },
      },
    },
  },
  pageContext: { pagination },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const articles = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id)
  )

  return (
    <Layout
      to={to}
      breadcrumb={breadcrumb}
      title={title}
      description={description}
      cover={cover}
      coverAlt={coverAlt}
      type={type}
      pageName="blog"
    >
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
    site {
      siteMetadata {
        pages {
          blog {
            to
            breadcrumb
            title
            description
            cover
            coverAlt
            type
          }
        }
      }
    }
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
