/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default props => {
  const {
    prev,
    next,
  } = props.pageContext

  const { mdx } = props.data
  const {
    title,
    date,
    cover
  } = mdx.frontmatter
  const children = <MDXRenderer children={mdx.body} />

  return (
    <Layout>
      {cover && <Img sizes={cover.childImageSharp.sizes} />}
      <Styled.h1>{title}</Styled.h1>
      <time>{date}</time>
      {children}
      <div
        sx={{
          display: 'flex',
        }}
        py={4}>
        {prev && (
          <Styled.a
            as={Link}
            to={prev.fields.slug}
            sx={{
              fontSize: 4,
              fontWeight: 'bold',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Previous
          </Styled.a>
        )}
        <div sx={{ m: 'auto' }} />
        {next && (
          <Styled.a
            as={Link}
            to={next.fields.slug}
            sx={{
              fontSize: 4,
              fontWeight: 'bold',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Next
          </Styled.a>
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
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
`
