/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Container } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import GlobalStyles from "../GlobalStyles"
import Head from "../Head"
import Header from "../Header"
import Footer from "../Footer"
import SchemaOrg from "../SchemaOrg"

const Layout = ({
  children,
  to,
  slug,
  title,
  description,
  covers,
  coverAlt,
  pageName,
  type,
  breadcrumb,
  date,
  modifiedDate,
  headerRef,
}) => {
  const {
    siteUrl,
    firstName,
    lastName,
    socialMedia,
    pages,
    logo,
    language,
    address,
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

  const seo = {
    url: isPage.home
      ? siteUrl
      : isPage.article
      ? `${siteUrl}/${slug}/`
      : `${siteUrl}${to}`,
    speakableSelector: !isPage.blog && speakableSelector,
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
        url={seo.url}
        title={title}
        description={description}
        covers={seo.covers}
        coverAlt={coverAlt}
        firstName={firstName}
        lastName={lastName}
        socialMedia={socialMedia}
        date={date}
        modifiedDate={modifiedDate}
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
        {pageName !== `home` && <Footer copyrightYear={copyrightYear} />}
      </Container>
      <SchemaOrg
        to={to}
        slug={slug}
        url={seo.url}
        siteUrl={siteUrl}
        title={title}
        description={description}
        covers={seo.covers}
        firstName={firstName}
        lastName={lastName}
        socialMedia={socialMedia}
        type={type}
        breadcrumb={breadcrumb}
        date={date}
        modifiedDate={modifiedDate}
        address={address}
        language={language}
        logo={logo}
        jobTitle={jobTitle}
        pages={pages}
        isPage={isPage}
        speakableSelector={seo.speakableSelector}
      />
    </Fragment>
  )
}

export default Layout
