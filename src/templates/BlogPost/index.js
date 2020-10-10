/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"
import HitCounter from "../../components/HitCounter"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next, slug } = pageContext

  const { mdx } = data
  const { title, date, cover, coverAlt } = mdx.frontmatter

  return (
    <Layout>
      <TweetableSelection />
      {cover && (
        <Img
          alt={coverAlt}
          sizes={cover.childImageSharp.sizes}
          fluid={cover.childImageSharp.fluid}
        />
      )}
      <Styled.h1>{title}</Styled.h1>
      <HitCounter slug={slug} />

      <time>{date}</time>
      {/* eslint react/no-children-prop: 0 */}
      <MDXRenderer children={mdx.body} />

      <Pagination previous={prev?.fields?.slug} next={next?.fields?.slug} />
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
        coverAlt
        cover {
          childImageSharp {
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
