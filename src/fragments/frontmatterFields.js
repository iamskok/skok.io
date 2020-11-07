import { graphql } from "gatsby"

export const frontmatterFields = graphql`
  fragment frontmatterFields on MdxFrontmatter {
    title
    description
    date(formatString: "MMMM DD, YYYY")
    cover {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        ...childImageSharpFields
      }
    }
    coverAlt
  }
`
