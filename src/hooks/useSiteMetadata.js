import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            authorFirstName
            authorLastName
            siteUrl
            siteName
            cover
            coverAlt
            navigation {
              label
              to
            }
            socialMedia {
              twitter
              github
            }
            codeBlock {
              lineNumbers
              lineNumbersButton
              copyButton
              languageTab
            }
            colorModes
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
