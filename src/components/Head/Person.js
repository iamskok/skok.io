import React from "react"
import { Helmet } from "react-helmet"

const Person = ({
  firstName,
  lastName,
  telephone,
  email,
  image,
  url,
  jobTitle,
  addressLocality,
  addressRegion,
  postalCode,
  streetAddress,
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
    },
    firstName && lastName ? { name: `${firstName} ${lastName}` } : null,
    image ? { image } : null,
    email ? { email } : null,
    jobTitle ? { jobTitle } : null,
    telephone ? { telephone } : null,
    url ? { url } : null,
    { address }
  )

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Person
