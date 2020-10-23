/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/Layout"
import BlogPostCover from "../../components/BlogPostCover"
import BlogPostMeta from "../../components/BlogPostMeta"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next, slug } = pageContext
  const {
    mdx: {
      body,
      frontmatter: { title, date, cover, coverAlt },
    },
  } = data

  return (
    <Layout>
      <TweetableSelection />
      {cover && <BlogPostCover src={cover} alt={coverAlt} />}
      <Styled.h1>{title}</Styled.h1>
      <BlogPostMeta slug={slug} date={date} />
      {/* eslint react/no-children-prop: 0 */}
      <MDXRenderer children={body} />
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
