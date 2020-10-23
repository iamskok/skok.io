/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Container } from "theme-ui"
import GlobalStyles from "../GlobalStyles"
import Head from "../Head"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <Head />
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
  </Fragment>
)

export default Layout
