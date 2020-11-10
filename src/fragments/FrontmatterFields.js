import { graphql } from "gatsby"

export const FrontmatterFields = graphql`
  fragment FrontmatterFields on MdxFrontmatter {
    title
    description
    date(formatString: "MMMM DD, YYYY")
    modifiedDate(formatString: "MMMM DD, YYYY")
    coverAlt
  }
`
