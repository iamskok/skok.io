import React from "react"
import schemaId from "./schemaId"

const Organization = ({ url, name, logo }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": `http://schema.org`,
          "@id": schemaId(`organization`),
          "@type": `Organization`,
          logo: {
            "@type": `ImageObject`,
            height: 120,
            width: 120,
            url: logo,
          },
          address: {
            "@id": schemaId(`address`),
          },
          url,
          name,
        }),
      }}
    />
  )
}

export default Organization
