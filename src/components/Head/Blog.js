import React from "react"
import { Helmet } from "react-helmet"
import schemaId from "./schemaId"

const Blog = ({
  type,
  headline,
  description,
  articleSection,
  url,
  name,
  inLanguage,
  genre,
  image,
}) => {
  const person = {
    "@id": schemaId(`person`),
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": type,
      author: person,
      copyrightHolder: person,
      creator: person,
      publisher: {
        "@id": schemaId(`organization`),
      },
      copyrightYear: new Date().getFullYear(),
    },
    articleSection ? { articleSection } : null,
    description ? { description } : null,
    genre ? { genre } : null,
    headline ? { headline } : null,
    inLanguage ? { inLanguage } : null,
    name ? { name } : null,
    url ? { url } : null,
    image ? { image } : null
  )

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Blog
