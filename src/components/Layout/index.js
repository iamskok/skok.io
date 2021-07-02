/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Container } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import GlobalStyles from "../GlobalStyles"
import Header from "../Header"
import PreloadLinks from "../PreloadLinks"
import SEO from "../SEO"

const Layout = ({
  children,
  pageId,
  pathName,
  slug,
  title,
  description,
  images,
  imageAlt,
  breadcrumb,
  datePublished,
  dateModified,
  type,
}) => {
  const { speakableSelector: selector } = useSiteMetadata()
  // Convert `speakableSelector` to React prop
  const speakableSelector = Object.fromEntries(
    new Map([Object.values(selector)])
  )
  // Add `speakableSelector` for certain pages
  const isSpeakableSelector = [`home`, `post`].includes(pageId)

  return (
    <Fragment>
      <GlobalStyles />
      <PreloadLinks />
      {pageId && (
        /* eslint-disable-next-line react/jsx-pascal-case */
        <SEO
          pageId={pageId}
          pathName={pathName}
          slug={slug}
          title={title}
          description={description}
          images={images}
          imageAlt={imageAlt}
          breadcrumb={breadcrumb}
          datePublished={datePublished}
          dateModified={dateModified}
          type={type}
        />
      )}
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
          {...(isSpeakableSelector && { ...speakableSelector })}
          sx={{
            display: `flex`,
            flexDirection: `column`,
            flex: 1,
          }}
        >
          {children}
        </main>
      </Container>
    </Fragment>
  )
}

export default Layout
