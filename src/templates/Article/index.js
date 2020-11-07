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
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        ...FrontmatterFields
      }
    }
  }
`
