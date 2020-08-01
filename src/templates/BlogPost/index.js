/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"
import handleScrollPositionToPercent from "../../utils/handle-scroll-position-to-percent"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next } = pageContext

  const { mdx } = data
  const { title, date, cover, coverAlt } = mdx.frontmatter

  useEffect(() => {
    window.addEventListener("scroll", () =>
      handleScrollPositionToPercent(title)
    )

    return () => {
      window.removeEventListener("scroll", handleScrollPositionToPercent)
    }
  }, [handleScrollPositionToPercent])

  return (
    <Layout>
      <TweetableSelection />
      {cover && <Img sizes={cover.childImageSharp.sizes} alt={coverAlt} />}
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
        coverAlt
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
