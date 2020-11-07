import React from "react"
import schemaId from "./schemaId"

const Address = ({
  address: { addressLocality, addressRegion, postalCode, streetAddress },
}) => {
  const schema = Object.assign(
    {
      "@context": `https://schema.org`,
      "@type": `PostalAddress`,
      "@id": schemaId(`address`),
    },
    addressLocality && { addressLocality },
    addressRegion && { addressRegion },
    postalCode && { postalCode },
    streetAddress && { streetAddress }
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Address
