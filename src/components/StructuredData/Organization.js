import React from "react"
import schemaId from "./schemaId"

const Organization = ({
  id,
  name,
  telephone,
  email,
  image,
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
    description ? { description } : null,
    email ? { email } : null,
    telephone ? { telephone } : null,
    name ? { name } : null,
    url ? { url } : null,
    Object.values(sameAs).length > 0 ? { sameAs: Object.values(sameAs) } : null,
    image
      ? {
          image: {
            "@type": `ImageObject`,
            height: 2048,
            width: 2048,
            url: image,
          },
        }
      : null,
    logo
      ? {
          logo: {
            "@type": `ImageObject`,
            height: 60,
            width: 60,
            url: logo,
          },
        }
      : null
  )

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}

export default Organization
