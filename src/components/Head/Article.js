import React from "react"
import { Helmet } from "react-helmet"
import schemaId from "./schemaId"

const Article = ({
  type,
  headline,
  description,
  articleSection,
  dateModified,
  datePublished,
  mainEntityOfPage,
  url,
  name,
  inLanguage,
  genre,
  image,
  cssSelector,
}) => {
  const person = {
    "@id": schemaId(`person`),
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": type,
      "@id": schemaId(`article`),
      author: person,
      copyrightHolder: person,
      creator: person,
      publisher: {
        "@id": schemaId(`organization`),
      },
      copyrightYear: new Date().getFullYear(),
    },
    articleSection ? { articleSection } : null,
    dateModified ? { dateModified } : null,
    datePublished ? { datePublished } : null,
    description ? { description } : null,
    genre ? { genre } : null,
    headline ? { headline } : null,
    inLanguage ? { inLanguage } : null,
    name ? { name } : null,
    url ? { url } : null,
    image ? { image } : null,
    mainEntityOfPage
      ? {
          mainEntityOfPage: {
            "@type": `WebPage`,
            "@id": mainEntityOfPage,
          },
        }
      : null,
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

export default Article
