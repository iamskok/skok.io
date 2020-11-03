import React from "react"
import schemaId from "./schemaId"

const BreadcrumbList = ({ itemListElement }) => {
  const schema = {
    "@context": `http://schema.org`,
    "@type": `BreadcrumbList`,
    name: `Breadcrumbs`,
    "@id": schemaId(`breadcrumbs`),
    itemListElement: itemListElement.map(({ id, name }, index) => ({
      "@type": `ListItem`,
      position: index + 1,
      name,
      item: {
        "@type": `WebPage`,
        "@id": id,
      },
    })),
  }

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}

export default BreadcrumbList
