import React from "react"
import { Helmet } from "react-helmet"
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
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Address
