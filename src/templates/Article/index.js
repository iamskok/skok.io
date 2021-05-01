/** @jsx jsx */
import { useEffect, useState, useContext, Fragment } from "react"
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import throttle from "lodash.throttle"
import Layout from "../../components/Layout"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import ArticleCover from "../../components/ArticleCover"
import ArticleMeta from "../../components/ArticleMeta"
import Pagination from "../../components/Pagination"
import Progress from "../../components/Progress"
import { RefContext } from "../../components/RefProvider"
import handleActiveHeaderId from "./handleActiveHeaderId"
import handleProgress from "./handleProgress"

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
  const [progress, setProgress] = useState(0)
  const { headerRef } = useContext(RefContext)

  useEffect(() => {
    const hasIntro = !!document.getElementById(`introduction`)
    if (hasIntro) {
      setActiveHeaderId(`introduction`)
    }

    const handleScroll = throttle(() => {
      handleActiveHeaderId({
        hasIntro,
        articleHeaderIds,
        setActiveHeaderId,
      })
      handleProgress({
        headerRef,
        setProgress,
      })
    }, 200)

    window.addEventListener(`scroll`, handleScroll)

    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [articleHeaderIds, headerRef])

  return (
    <Fragment>
      <Progress value={progress} />
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
    </Fragment>
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
