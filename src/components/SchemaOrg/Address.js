import React from "react"
import schemaId from "./schemaId"

const Address = ({
  address: { addressCountry, addressLocality, addressRegion },
}) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": `https://schema.org`,
          "@type": `PostalAddress`,
          "@id": schemaId(`address`),
          addressCountry,
          addressLocality,
          addressRegion,
        }),
      }}
    />
  )
}

export default Address
