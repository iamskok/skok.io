import React from "react"
import { Helmet } from "react-helmet"
import schemaId from "./schemaId"

const WebPage = ({
  type,
  url,
  name,
  image,
  inLanguage,
  description,
  cssSelector,
}) => {
  const person = {
    "@id": schemaId(`person`),
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": type,
      publisher: person,
      author: person,
      copyrightHolder: person,
      creator: person,
    },
    url ? { url } : null,
    name ? { name } : null,
    image ? { image } : null,
    inLanguage ? { inLanguage } : null,
    description ? { description } : null,
    cssSelector.length > 0
      ? {
          speakable: {
            "@type": `SpeakableSpecification`,
            cssSelector,
          },
        }
      : null
  )

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default WebPage
