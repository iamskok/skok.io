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
    addressLocality ? { addressLocality } : null,
    addressRegion ? { addressRegion } : null,
    postalCode ? { postalCode } : null,
    streetAddress ? { streetAddress } : null
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Address
