import { graphql } from "gatsby"

export const FrontmatterFields = graphql`
  fragment FrontmatterFields on MdxFrontmatter {
    title
    description
    date(formatString: "MMMM DD, YYYY")
    updatedDate(formatString: "MMMM DD, YYYY")
    cover {
      childImageSharp {
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        ...ChildImageSharpFields
      }
    }
    coverAlt
  }
`
