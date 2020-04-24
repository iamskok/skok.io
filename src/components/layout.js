import React from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <Head />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout