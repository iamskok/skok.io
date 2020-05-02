/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Container } from 'theme-ui'
import Head from './head'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <Fragment>
    <Head />
    <Container sx={{
      paddingX: 3,
      height: `100%`,
      display: `flex`,
      flexDirection: `column`
    }}>
      <Header />
      <main sx={{ flexGrow: 1 }}>
        { children }
      </main>
      <Footer />
    </Container>
  </Fragment>
)

export default Layout