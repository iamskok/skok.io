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
  images,
  copyrightYear,
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
      copyrightYear,
    },
    articleSection && { articleSection },
    datePublished && { datePublished },
    dateModified && { dateModified },
    !dateModified && datePublished && { dateModified: datePublished },
    description && { description },
    genre && { genre },
    headline && { headline },
    inLanguage && { inLanguage },
    name && { name },
    url && { url },
    images &&
      Object.values(images)?.length > 0 && {
        image: [
          images?.google1x1,
          images?.google4x3,
          images?.google16x9,
        ].filter(Boolean),
      },
    mainEntityOfPage && {
      mainEntityOfPage: {
        "@type": `WebPage`,
        "@id": mainEntityOfPage,
      },
    },
    cssSelector?.length > 0 && {
      speakable: {
        "@type": `SpeakableSpecification`,
        cssSelector,
      },
    }
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Page
