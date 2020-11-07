import React from "react"
import schemaId from "./schemaId"

const Breadcrumbs = ({
  siteUrl,
  title,
  homeBreadcrumb,
  articleBreadcrumb,
  blogBreadcrumb,
  isPage,
  blogTo,
  slug,
  to,
  breadcrumb,
}) => {
  const itemListElement = [
    {
      id: siteUrl,
      name: `${homeBreadcrumb}`,
    },
    (isPage.blog || isPage.contact || isPage.about) && {
      id: `${siteUrl}${to}`,
      name: breadcrumb,
    },
    isPage.article && {
      id: `${siteUrl}${blogTo}`,
      name: blogBreadcrumb,
    },
    {
      id: `${siteUrl}${slug}`,
      name: `${articleBreadcrumb} ${title}`,
    },
  ].filter(Boolean)

  const schema = {
    "@context": `http://schema.org`,
    "@type": `BreadcrumbList`,
    "@id": schemaId(`breadcrumbs`),
    name: `Breadcrumbs`,
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default Breadcrumbs
