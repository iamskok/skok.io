import React from "react"
import { Helmet } from "react-helmet"

const Person = ({
  name,
  founder,
  telephone,
  email,
  image,
  url,
  logo,
  sameAs,
  description,
}) => {
  const person = {
    "@id": `#person`,
  }

  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@id": `#organization`,
      "@type": `Organization`,
      address: {
        "@id": `#address`,
      },
      founder: person,
      contactPoint: person,
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default Person
