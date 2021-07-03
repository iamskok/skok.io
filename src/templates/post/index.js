/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useKey } from "react-use"
import { GatsbyImage } from "gatsby-plugin-image"
import { ScrollProvider } from "../../components/ScrollProvider"
import {
  NotationProvider,
  notationRef,
} from "../../components/NotationProvider"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import useStyleSheet from "../../hooks/use-style-sheet"
import Layout from "../../components/Layout"
import PostMeta from "../../components/PostMeta"
import Pagination from "../../components/Pagination"
import scrollCodeBlock from "../../components/CodeBlock/scroller"
import ScrollProgress from "../../components/ScrollProgress"

const Post = ({
  data: {
    mdx: {
      body,
      frontmatter: {
        title,
        description,
        image: {
          childImageSharp: { gatsbyImageData, ...seoImages },
        },
        imageAlt,
        datePublished,
        dateModified,
      },
    },
  },
  pageContext: {
    previousPost,
    nextPost,
    slug,
    tableOfContents: {
      ids: tableOfContentsHeaderIds,
      items: tableOfContentsItems,
    },
  },
}) => {
  const {
    pages: {
      post: { id, type },
    },
  } = useSiteMetadata()

  // Apply smooth scrolling after mounting to avoid the page jumping
  useStyleSheet(`html`, { "scroll-behavior": `smooth` })
  useKey(`ArrowLeft`, event => scrollCodeBlock(event, `left`))
  useKey(`ArrowRight`, event => scrollCodeBlock(event, `right`))

  return (
    <NotationProvider>
      <ScrollProvider>
        <ScrollProgress />
        <Layout
          pageId={id}
          type={type}
          slug={slug}
          title={title}
          description={description}
          images={{ ...seoImages }}
          imageAlt={imageAlt}
          datePublished={datePublished}
          dateModified={dateModified}
        >
          {gatsbyImageData && imageAlt && (
            <GatsbyImage image={gatsbyImageData} alt={imageAlt} />
          )}
          <div ref={notationRef}>
            <Themed.h1>{title}</Themed.h1>
            <PostMeta slug={slug} date={datePublished} />
            <MDXRenderer
              tableOfContentsItems={tableOfContentsItems}
              tableOfContentsHeaderIds={tableOfContentsHeaderIds}
            >
              {body}
            </MDXRenderer>
          </div>
          {(previousPost || nextPost) && (
            <Pagination previous={previousPost} next={nextPost} />
          )}
        </Layout>
      </ScrollProvider>
    </NotationProvider>
  )
}

export default Post

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        ...FrontmatterFields
        image {
          childImageSharp {
            ...ImageUrlFields
          }
        }
      }
    }
  }
`
