/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Container } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import GlobalStyles from "../GlobalStyles"
import Head from "../Head"
import Header from "../Header"
import Footer from "../Footer"
import StructuredData from "../StructuredData"

const Layout = ({
  children,
  slug,
  title,
  description,
  date,
  cover,
  coverAlt,
  pageName,
  breadcrumb,
  type,
  to,
}) => {
  const { siteUrl, speakableSelector, genre } = useSiteMetadata()
  const isArticle = pageName === `article`
  const isHome = pageName === `home`
  const isBlog = pageName === `blog`
  const isAbout = pageName === `about`
  const isContact = pageName === `contact`

  const url = isHome
    ? siteUrl
    : isArticle
    ? `${siteUrl}${slug}`
    : `${siteUrl}${to}`

  const pageCover = cover ? `${siteUrl}${cover}` : null
  const pageGenre = isArticle ? genre : null
  const pageSpeakableSelector = !isBlog ? speakableSelector : null

  return (
    <Fragment>
      <GlobalStyles />
      <Head
        // url={url}
        // to={to}
        // type={type}
        // slug={slug}
        // title={title}
        // breadcrumb={breadcrumb}
        // description={description}
        // date={date}
        // cover={pageCover}
        // coverAlt={coverAlt}
        // pageName={pageName}
        url={url}
        to={to}
        type={type}
        slug={slug}
        title={title}
        breadcrumb={breadcrumb}
        description={description}
        date={date}
        cover={pageCover}
        coverAlt={coverAlt}
        pageName={pageName}
        genre={pageGenre}
        speakableSelector={pageSpeakableSelector}
      />
      <Container
        sx={{
          paddingX: 3,
          minHeight: `100%`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <Header />
        <main
          sx={{
            display: `flex`,
            flexDirection: `column`,
            flex: 1,
          }}
        >
          {children}
        </main>
        <Footer />
      </Container>
      <StructuredData
        url={url}
        to={to}
        type={type}
        slug={slug}
        title={title}
        breadcrumb={breadcrumb}
        description={description}
        date={date}
        cover={pageCover}
        coverAlt={coverAlt}
        pageName={pageName}
        genre={pageGenre}
        speakableSelector={pageSpeakableSelector}
      />
    </Fragment>
  )
}

export default Layout
