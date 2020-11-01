import React from "react"
import { Helmet } from "react-helmet"

const Website = ({ url, name, image, inLanguage, description }) => {
  const person = {
    "@id": `#person`,
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": `WebPage`,
      "@id": `#webpage`,
      publisher: person,
      author: person,
      copyrightHolder: person,
      creator: person,
      speakable: {
        "@type": `SpeakableSpecification`,
        cssSelector: [`[data-speakable="true"]`],
      },
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
