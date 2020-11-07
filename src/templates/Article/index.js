/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/Layout"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import TweetableSelection from "../../components/TweetableSelection"
import ArticleCover from "../../components/ArticleCover"
import ArticleMeta from "../../components/ArticleMeta"
import Pagination from "../../components/Pagination"

const Article = ({ pageContext, data }) => {
  const { prev, next, slug } = pageContext
  const {
    mdx: {
      body,
      frontmatter: { title, description, date, cover, coverAlt },
    },
  } = data

  const {
    pages: {
      article: { type, breadcrumb },
    },
  } = useSiteMetadata()

  return (
    <Layout
      type={type}
      slug={slug}
      title={title}
      date={date}
      cover={cover?.childImageSharp?.fluid?.src}
      covers={{ ...cover?.childImageSharp }}
      coverAlt={coverAlt}
      description={description}
      breadcrumb={breadcrumb}
      pageName="article"
    >
      <TweetableSelection />
      {cover && coverAlt && <ArticleCover src={cover} alt={coverAlt} />}
      <div data-speakable="true">
        <Styled.h1>{title}</Styled.h1>
        <ArticleMeta slug={slug} date={date} />
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      {(prev?.fields?.slug || next?.fields?.slug) && (
        <Pagination previous={prev?.fields?.slug} next={next?.fields?.slug} />
      )}
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        pages {
          article {
            type
            breadcrumb
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
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
        coverAlt
      }
    }
  }
`
