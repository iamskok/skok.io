import React from "react"
import schemaId from "./schemaId"

const Organization = ({
  url,
  name,
  logo: { url: logoPathName, width, height },
}) => {
  const logoUrl = `${url}/${logoPathName}`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": `http://schema.org`,
          "@id": schemaId(`organization`),
          "@type": `Organization`,
          logo: {
            "@type": `ImageObject`,
            url: logoUrl,
            height,
            width,
          },
          address: {
            "@id": schemaId(`address`),
          },
          url,
          name,
        }),
      }}
    />
  )
}

export default Organization
