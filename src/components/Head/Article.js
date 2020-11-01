import React from "react"
import { Helmet } from "react-helmet"

const Article = ({
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
}) => {
  const person = {
    "@type": `Person`,
    "@id": `#person`,
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": `Article`,
      "@id": `#article`,
      author: person,
      copyrightHolder: person,
      creator: person,
      publisher: {
        "@type": `Organization`,
        "@id": `#organization`,
      },
      copyrightYear: new Date().getFullYear(),
      speakable: {
        "@type": `SpeakableSpecification`,
        cssSelector: [`[data-speakable="true"]`],
      },
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
      : null
  )

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Article
