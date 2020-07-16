/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Pagination from "../components/pagination"
import TweetableSelection from "../components/tweetable-selection"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next } = pageContext

  const { mdx } = data
  const { title, date, cover } = mdx.frontmatter

  return (
    <Layout>
      <TweetableSelection />
      {cover && <Img sizes={cover.childImageSharp.sizes} />}
      <Styled.h1>{title}</Styled.h1>

      <time>{date}</time>
      {/* eslint react/no-children-prop: 0 */}
      <MDXRenderer children={mdx.body} />

      <Pagination
        previous={prev && prev.fields && prev.fields.slug}
        next={next && next.fields && next.fields.slug}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($id: String!) {
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
