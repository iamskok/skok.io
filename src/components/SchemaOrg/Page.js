import React from "react"
import schemaId from "./schemaId"

const Page = ({
  type,
  headline,
  description,
  dateModified,
  datePublished,
  mainEntityOfPage,
  url,
  name,
  inLanguage,
  images,
  cssSelector,
}) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          Object.assign(
            {
              "@context": `http://schema.org`,
              "@type": type,
              author: {
                "@id": schemaId(`person`),
              },
              publisher: {
                "@id": schemaId(`organization`),
              },
              description,
              headline,
              inLanguage,
              name,
              url,
              mainEntityOfPage: {
                "@type": `WebPage`,
                "@id": mainEntityOfPage,
              },
            },
            datePublished && { datePublished },
            dateModified
              ? { dateModified }
              : datePublished
              ? { dateModified: datePublished }
              : null,
            images &&
              Object.values(images)?.length > 0 && {
                image: [
                  images?.google1x1,
                  images?.google4x3,
                  images?.google16x9,
                ].filter(Boolean),
              },
            cssSelector && {
              speakable: {
                "@type": `SpeakableSpecification`,
                cssSelector,
              },
            }
          )
        ),
      }}
    />
  )
}

export default Page
