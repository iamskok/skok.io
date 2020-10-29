import React from "react"
import { Helmet } from "react-helmet"

const Person = ({
  name,
  telephone,
  email,
  image,
  url,
  jobTitle,
  sameAs,
  address: { addressLocality, addressRegion, postalCode, streetAddress },
}) => {
  const address = Object.assign(
    {
      "@type": `PostalAddress`,
    },
    addressLocality ? { addressLocality } : null,
    addressRegion ? { addressRegion } : null,
    postalCode ? { postalCode } : null,
    streetAddress ? { streetAddress } : null
  )

  const schema = Object.assign(
    {
      "@context": `https://schema.org`,
      "@type": `Person`,
      "@id": `#person`,
    },
    name ? { name } : null,
    image ? { image } : null,
    email ? { email } : null,
    jobTitle ? { jobTitle } : null,
    telephone ? { telephone } : null,
    url ? { url } : null,
    Object.values(sameAs).length > 0 ? { sameAs: Object.values(sameAs) } : null,
    Object.values(sameAs).length > 1 ? { address } : null
  )

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Person
