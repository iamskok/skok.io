import React from "react"
import { Helmet } from "react-helmet"

const ContactPage = ({
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
    "@id": `#person`,
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@type": `ContactPage`,
      "@id": `#contact`,
      author: person,
      copyrightHolder: person,
      creator: person,
      publisher: person,
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

export default ContactPage
