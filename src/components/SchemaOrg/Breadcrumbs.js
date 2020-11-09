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
  ]

  if (isPage.blog || isPage.contact || isPage.about) {
    itemListElement.push({
      id: `${siteUrl}${to}`,
      name: breadcrumb,
    })
  }

  if (isPage.article) {
    itemListElement.push(
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
        }),
      }}
    />
  )
}

export default Breadcrumbs
