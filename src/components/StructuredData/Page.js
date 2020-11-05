import React from "react"
import schemaId from "./schemaId"

const Page = ({
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
  images,
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
    images && Object.values(images).length > 0
      ? {
          image: [images.google1x1, images.google4x3, images.google16x9],
        }
      : image
      ? { image }
      : null,
    mainEntityOfPage
      ? {
          mainEntityOfPage: {
            "@type": `WebPage`,
            "@id": mainEntityOfPage,
          },
        }
      : null,
    cssSelector?.length > 0
      ? {
          speakable: {
            "@type": `SpeakableSpecification`,
            cssSelector,
          },
        }
      : null
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Page
