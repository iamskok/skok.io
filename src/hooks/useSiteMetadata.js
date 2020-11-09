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
            avatar
            siteUrl
            language
            speakableSelector
            logo
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
              contact {
                to
                order
                label
                breadcrumb
                title
                description
                coverAlt
                type
              }
              about {
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
            codeBlock {
              lineNumbers
              lineNumbersButton
              copyButton
              languageTab
            }
            favicons {
              light
              dark
            }
          }
        }
      }
    `
  )

  return siteMetadata
}

export default useSiteMetadata
