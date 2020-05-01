/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Pagination from '../components/pagination'

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
  const children = <MDXRenderer children={ mdx.body } />

  return (
    <Layout>
      { cover &&
        <Img sizes={cover.childImageSharp.sizes} />
      }
      <Styled.h1>
        { title }
      </Styled.h1>

      <time>
        { date }
      </time>

      { children }

      <Pagination
        previous={
          prev &&
          prev.fields &&
          prev.fields.slug
        }
        next={
          next &&
          next.fields &&
          next.fields.slug
        }
      />
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
