import React from "react"
import schemaId from "./schemaId"

const Person = ({
  id,
  name,
  telephone,
  email,
  image,
  url,
  jobTitle,
  sameAs,
}) => {
  const schema = Object.assign(
    {
      "@context": `https://schema.org`,
      "@type": `Person`,
      "@id": id,
      address: {
        "@id": schemaId(`address`),
      },
    },
    name ? { name } : null,
    image ? { image } : null,
    email ? { email } : null,
    jobTitle ? { jobTitle } : null,
    telephone ? { telephone } : null,
    url ? { url } : null,
    sameAs && Object.values(sameAs).length > 0
      ? { sameAs: Object.values(sameAs) }
      : null
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Person
