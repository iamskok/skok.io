import React from "react"
import schemaId from "./schemaId"

const Address = ({ address: { addressLocality, addressRegion } }) => {
  const schema = Object.assign(
    {
      "@context": `https://schema.org`,
      "@type": `PostalAddress`,
      "@id": schemaId(`address`),
    },
    addressLocality && { addressLocality },
    addressRegion && { addressRegion }
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Address
