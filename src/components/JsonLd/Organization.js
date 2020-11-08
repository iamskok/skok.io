import React from "react"

const Organization = ({ id, url, logo }) => {
  const schema = Object.assign(
    {
      "@context": `http://schema.org`,
      "@id": id,
      "@type": `Organization`,
    },
    url && { url },
    logo && {
      logo: {
        "@type": `ImageObject`,
        height: 120,
        width: 120,
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
