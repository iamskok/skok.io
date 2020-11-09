import React from "react"
import schemaId from "./schemaId"

const Person = ({ name, url, sameAs }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": `https://schema.org`,
          "@type": `Person`,
          "@id": schemaId(`person`),
          name,
          url,
          sameAs: Object.values(sameAs),
          address: {
            "@id": schemaId(`address`),
          },
        }),
      }}
    />
  )
}

export default Person
