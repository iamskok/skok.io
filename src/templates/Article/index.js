/** @jsx jsx */
import { useEffect, useState } from "react"
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import throttle from "lodash.debounce"
import Layout from "../../components/Layout"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import ArticleCover from "../../components/ArticleCover"
import ArticleMeta from "../../components/ArticleMeta"
import Pagination from "../../components/Pagination"

const Article = ({ pageContext, data }) => {
  const { prev, next, slug, articleHeaderIds } = pageContext
  const {
    mdx: {
      tableOfContents: { items: tocItems },
      body,
      frontmatter: { title, description, date, modifiedDate, cover, coverAlt },
    },
  } = data

  const {
    pages: {
      article: { type, breadcrumb },
    },
  } = useSiteMetadata()

  const [activeHeaderId, setActiveHeaderId] = useState()

  useEffect(() => {
    const hasIntro = !!document.getElementById(`introduction`)
    if (hasIntro) {
      setActiveHeaderId(`introduction`)
    }

    const handleScroll = () => {
      // Track page center position
      const pageScrollPosition = window.scrollY + window.innerHeight / 2
      const allArticleHeaderIds = hasIntro
        ? [`introduction`, ...articleHeaderIds]
        : articleHeaderIds

      for (let i = 0; i < allArticleHeaderIds.length; i++) {
        const topHeaderId = allArticleHeaderIds[i]
        const bottomHeaderId = allArticleHeaderIds[i + 1]
        const topHeaderPosition = document.getElementById(topHeaderId)
          ?.offsetTop
        const bottomHeaderPosition =
          document.getElementById(bottomHeaderId)?.offsetTop || Infinity

        if (
          topHeaderPosition <= pageScrollPosition &&
          bottomHeaderPosition >= pageScrollPosition
        ) {
          return setActiveHeaderId(topHeaderId)
        }
      }
    }

    window.addEventListener(`scroll`, throttle(handleScroll, 200))

    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [articleHeaderIds])

  return (
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
        <MDXRenderer tocItems={tocItems} tocActiveHeader={activeHeaderId}>
          {body}
        </MDXRenderer>
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
      tableOfContents
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
