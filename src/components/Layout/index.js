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
  to,
  slug,
  title,
  description,
  cover,
  covers,
  coverAlt,
  pageName,
  type,
  breadcrumb,
  date,
  updatedDate,
}) => {
  const {
    siteUrl,
    firstName,
    lastName,
    socialMedia,
    pages,
    logo,
    genre,
    language,
    email,
    address,
    telephone,
    jobTitle,
    copyrightYear,
    speakableSelector,
  } = useSiteMetadata()

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
        url={page.url}
        title={title}
        description={description}
        cover={page.cover}
        covers={page.covers}
        coverAlt={coverAlt}
        firstName={firstName}
        lastName={lastName}
        socialMedia={socialMedia}
        date={date}
        language={language}
        pages={pages}
        isPage={isPage}
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
        <Footer copyrightYear={copyrightYear} />
      </Container>
      <StructuredData
        to={to}
        slug={slug}
        url={page.url}
        siteUrl={siteUrl}
        title={title}
        description={description}
        cover={page.cover}
        covers={page.covers}
        firstName={firstName}
        lastName={lastName}
        socialMedia={socialMedia}
        type={type}
        breadcrumb={breadcrumb}
        date={date}
        updatedDate={updatedDate}
        language={language}
        logo={logo}
        genre={page.genre}
        email={email}
        telephone={telephone}
        address={address}
        jobTitle={jobTitle}
        copyrightYear={copyrightYear}
        pages={pages}
        isPage={isPage}
        speakableSelector={page.speakableSelector}
      />
    </Fragment>
  )
}

export default Layout
