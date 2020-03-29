import React from 'react'
import FontFaceStacks from './font-face-stacks'
import Head from './head'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <FontFaceStacks />
    <Head />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout