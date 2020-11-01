import React from "react"
import { Helmet } from "react-helmet"

const Website = ({ url, name, image, inLanguage, description }) => {
  const person = {
    "@type": `Person`,
    "@id": `#person`,
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": `WebSite`,
      "@id": `#website`,
      publisher: person,
      author: person,
    },
    url ? { url } : null,
    name ? { name } : null,
    image ? { image } : null,
    inLanguage ? { inLanguage } : null,
    description ? { description } : null
  )

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Website
