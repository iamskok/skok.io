import React from "react"
import schemaId from "./schemaId"

const BreadcrumbList = ({
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
  const breadcrumbs = [
    {
      id: siteUrl,
      name: `${homeBreadcrumb}`,
    },
  ]

  if (isPage.blog || isPage.contact || isPage.about) {
    breadcrumbs.push({
      id: `${siteUrl}${to}`,
      name: breadcrumb,
    })
  }

  if (isPage.article) {
    breadcrumbs.push(
      {
        id: `${siteUrl}${blogTo}`,
        name: blogBreadcrumb,
      },
      {
        id: `${siteUrl}${slug}`,
        name: `${articleBreadcrumb} ${title}`,
      }
    )
  }

  const schema = {
    "@context": `http://schema.org`,
    "@type": `BreadcrumbList`,
    "@id": schemaId(`breadcrumbs`),
    name: `Breadcrumbs`,
    itemListElement: breadcrumbs.map(({ id, name }, index) => ({
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

export default BreadcrumbList
