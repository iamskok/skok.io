import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            firstName
            lastName
            avatar
            siteUrl
            siteName
            cover
            coverAlt
            language
            email
            telephone
            jobTitle
            genre
            speakableSelector
            logo {
              small
              large
            }
            address {
              addressLocality
              addressRegion
              postalCode
              streetAddress
            }
            socialMedia {
              twitter
              github
            }
            navigation {
              label
              to
            }
            pages {
              home {
                to
                order
                label
                title
                description
                cover
                coverAlt
              }
              blog {
                to
                order
                label
                title
                description
                cover
                coverAlt
              }
              contact {
                to
                order
                label
                title
                description
                cover
                coverAlt
              }
              about {
                to
                order
                label
                title
                description
                cover
                coverAlt
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
