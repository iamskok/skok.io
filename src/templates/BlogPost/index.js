/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { formatISO } from "date-fns"
import Layout from "../../components/Layout"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"
import WebMentions from "../../components/WebMentions"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const BlogPost = ({ pageContext, data }) => {
  const { prev, next, permalink } = pageContext
  const { mdx } = data
  const { title, summary, date, cover, coverAlt, tweet } = mdx.frontmatter
  const { siteUrl, author } = useSiteMetadata()
  const allWebMentionEntry = data?.allWebMentionEntry

  return (
    <Layout>
      <TweetableSelection />
      <article>
        {cover && (
          <Img
            alt={coverAlt}
            sizes={cover.childImageSharp.sizes}
            fluid={cover.childImageSharp.fluid}
          />
        )}

        <Styled.h1>{title}</Styled.h1>

        {date && <time dateTime={formatISO(new Date(date))}>{date}</time>}

        {summary && (
          <Styled.p sx={{ variant: `text.italic` }}>{summary}</Styled.p>
        )}

        {/* eslint react/no-children-prop: 0 */}
        <MDXRenderer children={mdx.body} />
      </article>

      <WebMentions allWebmentionEntry={allWebMentionEntry} tweet={tweet} />

      <Pagination previous={prev?.fields?.slug} next={next?.fields?.slug} />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($id: String!, $permalink: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        summary
        date
        tweet
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
    allWebMentionEntry(filter: { wmTarget: { eq: $permalink } }) {
      edges {
        node {
          type
          url
          published
          wmReceived
          wmId
          wmPrivate
          wmTarget
          wmSource
          wmProperty
          likeOf
          mentionOf
          inReplyTo
          repostOf
          bookmarkOf
          rsvp
          author {
            name
            type
            photo
            url
          }
          content {
            text
            html
          }
        }
      }
    }
  }
`
