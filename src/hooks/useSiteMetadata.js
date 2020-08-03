import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
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

  return site.siteMetadata
}

export default useSiteMetadata
