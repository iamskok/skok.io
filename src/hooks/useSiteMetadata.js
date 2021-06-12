import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            firstName
            lastName
            siteUrl
            language
            speakableSelector
            logo {
              url
              width
              height
            }
            copyrightYear
            address {
              addressCountry
              addressLocality
              addressRegion
            }
            socialMedia {
              twitter
              github
            }
            pages {
              home {
                to
                order
                label
                breadcrumb
                title
                description
                coverAlt
                type
              }
              blog {
                to
                order
                label
                breadcrumb
                title
                description
                coverAlt
                type
              }
              article {
                order
                breadcrumb
                type
              }
              notFound {
                order
                title
                description
              }
            }
            colorModes
            favicons {
              light
              dark
            }
            components {
              codeBlock {
                isCopy
                isFocus
                isLabel
              }
            }
          }
        }
      }
    `
  )

  return siteMetadata
}

export default useSiteMetadata
