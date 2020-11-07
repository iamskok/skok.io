import React from "react"
import schemaId from "./schemaId"

const Organization = ({
  id,
  name,
  telephone,
  email,
  url,
  logo,
  sameAs,
  description,
}) => {
  const person = {
    "@id": schemaId(`person`),
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@id": id,
      "@type": `Organization`,
      address: {
        "@id": schemaId(`address`),
      },
      founder: person,
    },
    description && { description },
    email && { email },
    telephone && { telephone },
    name && { name },
    url && { url },
    sameAs &&
      Object.values(sameAs)?.length > 0 && { sameAs: Object.values(sameAs) },
    logo && {
      logo: {
        "@type": `ImageObject`,
        height: 60,
        width: 60,
        url: logo,
      },
    }
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Organization
