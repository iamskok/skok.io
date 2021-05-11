/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FontLoadProvider } from "../../components/FontLoadProvider"
import { ScrollProvider } from "../../components/ScrollProvider"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import Layout from "../../components/Layout"
import ArticleCover from "../../components/ArticleCover"
import ArticleMeta from "../../components/ArticleMeta"
import Pagination from "../../components/Pagination"
import ScrollProgress from "../../components/ScrollProgress"

const Article = ({ pageContext, data }) => {
  const {
    prev,
    next,
    slug,
    toc: { ids: headerIds, items: tocItems },
  } = pageContext
  const {
    mdx: {
      body,
      frontmatter: { title, description, date, modifiedDate, cover, coverAlt },
    },
  } = data

  const {
    pages: {
      article: { type, breadcrumb },
    },
  } = useSiteMetadata()

  return (
    <FontLoadProvider>
      <ScrollProvider>
        <ScrollProgress />
        <Layout
          type={type}
          slug={slug}
          title={title}
          date={date}
          modifiedDate={modifiedDate}
          cover={cover?.childImageSharp?.fluid?.src}
          covers={{ ...cover?.childImageSharp }}
          coverAlt={coverAlt}
          description={description}
          breadcrumb={breadcrumb}
          pageName="article"
        >
          {cover && coverAlt && <ArticleCover src={cover} alt={coverAlt} />}
          <div data-speakable="true">
            <Styled.h1>{title}</Styled.h1>
            <ArticleMeta slug={slug} date={date} />
            <MDXRenderer tocItems={tocItems} headerIds={headerIds}>
              {body}
            </MDXRenderer>
          </div>
          {(prev?.fields?.slug || next?.fields?.slug) && (
            <Pagination
              previous={prev?.fields?.slug}
              next={next?.fields?.slug}
            />
          )}
        </Layout>
      </ScrollProvider>
    </FontLoadProvider>
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
        cover {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
            ...ChildImageSharpFields
          }
        }
      }
    }
  }
`
