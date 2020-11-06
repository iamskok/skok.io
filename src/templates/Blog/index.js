/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import BlogCard from "../../components/BlogCard"

const Blog = ({
  data: {
    file,
    allMdx: { edges },
  },
  pageContext: { pagination },
}) => {
  const {
    pages: {
      blog: { to, breadcrumb, title, description, coverAlt, type },
    },
  } = useSiteMetadata()

  const { page, nextPagePath, previousPagePath } = pagination
  const articles = page.map(id => edges.find(edge => edge.node.id === id))
  // const cover = file?.childImageSharp?.fluid?.src
  const covers = file?.childImageSharp

  return (
    <Layout
      to={to}
      breadcrumb={breadcrumb}
      title={title}
      description={description}
      // cover={cover}
      covers={{ ...covers }}
      coverAlt={coverAlt}
      type={type}
      pageName="blog"
    >
      <Styled.h1>Blog</Styled.h1>

      {articles.map(({ node }) => (
        <BlogCard key={node.id} article={node} />
      ))}

      <Pagination previous={previousPagePath} next={nextPagePath} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        google1x1: fluid(maxWidth: 1600, maxHeight: 1600, quality: 100) {
          src
        }
        google4x3: fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
          src
        }
        google16x9: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
          src
        }
        twitter: fluid(maxWidth: 1600, maxHeight: 800, quality: 100) {
          src
        }
        facebook: fluid(maxWidth: 1600, maxHeight: 838, quality: 100) {
          src
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
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            coverAlt
          }
        }
      }
    }
  }
`
