import React from "react"
import { Helmet } from "react-helmet"

const BreadcrumbList = ({ itemListElement, isBlog }) => {
  // Exclude blog post item on the blog page
  const elements = isBlog ? itemListElement.slice(0, 2) : itemListElement

  const schema = {
    "@context": `http://schema.org`,
    "@type": `BreadcrumbList`,
    "@id": `#breadcrumbs`,
    name: `Breadcrumbs`,
    itemListElement: elements.map(({ id, name }, index) => ({
      "@type": `ListItem`,
      position: index + 1,
      item: {
        "@id": id,
        name,
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
