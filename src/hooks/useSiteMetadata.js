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
