/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import BlogCard from "../../components/BlogCard"
import Pagination from "../../components/Pagination"

const Blog = ({ data: { file, allMdx }, pageContext: { pagination } }) => {
  const {
    pages: {
      blog: { to, title, description, coverAlt, type, breadcrumb },
    },
  } = useSiteMetadata()
  const { page, nextPagePath, previousPagePath } = pagination
  const covers = file?.childImageSharp
  const articles = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id)
  )

  return (
    <Layout
      to={to}
      title={title}
      description={description}
      covers={{ ...covers }}
      coverAlt={coverAlt}
      type={type}
      breadcrumb={breadcrumb}
      pageName="blog"
    >
      <Styled.h1>{title}</Styled.h1>

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
        ...ChildImageSharpFields
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
            ...FrontmatterFields
            cover {
              childImageSharp {
                fluid(maxWidth: 900) {
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
