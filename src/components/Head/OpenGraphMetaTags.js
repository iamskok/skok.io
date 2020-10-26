import React from "react"
import { Helmet } from "react-helmet"

const OpenGraphMetaTags = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Vladimir Skok" />
      <meta property="og:description" content="Vladimir Skok's personal blog" />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
    </Helmet>
  )
}

export default OpenGraphMetaTags
