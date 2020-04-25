/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Link from '../components/link';

const Blog = ({
  data: { allMdx },
  pageContext: { pagination },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination;

  const posts = page.map(id =>
    allMdx.edges.find(edge => edge.node.id === id)
  )

  return (
    <Layout>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          {post.frontmatter.cover && (
            <Img
              sizes={post.frontmatter.cover.childImageSharp.sizes}
            />
          )}

          <Styled.h2>
            <Link to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </Styled.h2>

          <small>{post.frontmatter.date}</small>

          <Styled.p>{post.excerpt}</Styled.p>

          <Styled.a to={post.fields.slug}>
            Continue Reading
          </Styled.a>
        </div>
      ))}

      <hr />

      <div>
        Pagination:
        <ul>
          {nextPagePath && (
            <li>
              <Link to={nextPagePath}>
                Next Page
              </Link>
            </li>
          )}

          {previousPagePath && (
            <li>
              <Link to={previousPagePath}>
                Previous Page
              </Link>
            </li>
          )}
        </ul>
      </div>
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
