import { graphql, useStaticQuery } from 'gatsby'

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
            codeBlock {
              lineNumbers
              lineNumbersButton
              copyButton
              languageTab
            }
            colorModes
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata