/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/Layout"
import ArticleCover from "../../components/ArticleCover"
import ArticleMeta from "../../components/ArticleMeta"
import Pagination from "../../components/Pagination"
import TweetableSelection from "../../components/TweetableSelection"

const Article = ({ pageContext, data }) => {
  const { prev, next, slug } = pageContext
  const {
    site: {
      siteMetadata: {
        pages: {
          article: { type, breadcrumb },
        },
      },
    },
    mdx: {
      body,
      frontmatter: { title, description, date, cover, coverAlt },
    },
  } = data

  return (
    <Layout
      type={type}
      breadcrumb={breadcrumb}
      slug={slug}
      title={title}
      date={date}
      cover={cover?.childImageSharp?.fluid?.src}
      covers={{
        google4x3: cover?.childImageSharp?.google4x3?.src,
        google16x9: cover?.childImageSharp?.google16x9?.src,
        google1x1: cover?.childImageSharp?.google1x1?.src,
        twitter: cover?.childImageSharp?.twitter?.src,
        facebook: cover?.childImageSharp?.facebook?.src,
      }}
      coverAlt={coverAlt}
      description={description}
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
        coverAlt
        cover {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            google4x3: fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            google16x9: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            google1x1: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            twitter: fluid(maxWidth: 1600, maxHeight: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            facebook: fluid(maxWidth: 1600, maxHeight: 838, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
