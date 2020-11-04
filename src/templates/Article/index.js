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
          contact: { type, breadcrumb },
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
      coverAlt={coverAlt}
      description={description}
      pageName="article"
    >
      <TweetableSelection />
      {cover && <ArticleCover src={cover} alt={coverAlt ? coverAlt : ``} />}
      <div data-speakable="true">
        <Styled.h1>{title}</Styled.h1>
        <ArticleMeta slug={slug} date={date} />
        {/* eslint react/no-children-prop: 0 */}
        <MDXRenderer children={body} />
      </div>
      <Pagination previous={prev?.fields?.slug} next={next?.fields?.slug} />
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        pages {
          contact {
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
          }
        }
      }
    }
  }
`
