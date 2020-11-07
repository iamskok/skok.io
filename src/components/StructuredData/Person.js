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
    name && { name },
    image && { image },
    email && { email },
    jobTitle && { jobTitle },
    telephone && { telephone },
    url && { url },
    Object.values(sameAs)?.length > 0 && { sameAs: Object.values(sameAs) }
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Person
