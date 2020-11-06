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
  cover,
  covers,
  pageName,
  breadcrumb,
  type,
  date,
  coverAlt,
  to,
}) => {
  const { siteUrl, speakableSelector, genre } = useSiteMetadata()

  const isPage = {
    article: pageName === `article`,
    home: pageName === `home`,
    blog: pageName === `blog`,
    about: pageName === `about`,
    contact: pageName === `contact`,
  }

  const page = {
    url: isPage.home
      ? siteUrl
      : isPage.article
      ? `${siteUrl}${slug}`
      : `${siteUrl}${to}`,
    speakableSelector: !isPage.blog && speakableSelector,
    genre: isPage.article && genre,
    cover: cover && `${siteUrl}${cover}`,
    covers:
      covers &&
      (() => {
        const coverURLs = {}
        for (const [key, value] of Object.entries(covers)) {
          coverURLs[key] = `${siteUrl}${value.src}`
        }
        return coverURLs
      })(),
  }

  return (
    <Fragment>
      <GlobalStyles />
      <Head
        isPage={isPage}
        title={title}
        description={description}
        url={page.url}
        date={date}
        cover={page.cover}
        covers={page.covers}
        coverAlt={coverAlt}
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
        isPage={isPage}
        title={title}
        description={description}
        type={type}
        breadcrumb={breadcrumb}
        genre={page.genre}
        speakableSelector={page.speakableSelector}
        url={page.url}
        to={to}
        slug={slug}
        date={date}
        cover={page.cover}
        covers={page.covers}
      />
    </Fragment>
  )
}

export default Layout
