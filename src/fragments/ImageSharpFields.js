import { graphql } from "gatsby"

export const ChildImageSharpFields = graphql`
  fragment ChildImageSharpFields on ImageSharp {
    google1x1: fixed(width: 1600, height: 1600) {
      src
    }
    google4x3: fixed(width: 1600, height: 1200) {
      src
    }
    google16x9: fixed(width: 1600, height: 900) {
      src
    }
    twitter: fixed(width: 1600, height: 800) {
      src
    }
    facebook: fixed(width: 1600, height: 838) {
      src
    }
  }
`
