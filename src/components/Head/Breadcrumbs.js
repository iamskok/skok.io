import React from "react"
import { Helmet } from "react-helmet"
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

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default BreadcrumbList
