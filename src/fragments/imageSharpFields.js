import { graphql } from "gatsby"

export const ChildImageSharpFields = graphql`
  fragment ChildImageSharpFields on ImageSharp {
    google1x1: fluid(maxWidth: 1600, maxHeight: 1600, quality: 100) {
      src
    }
    google4x3: fluid(maxWidth: 1600, maxHeight: 1200, quality: 100) {
      src
    }
    google16x9: fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
      src
    }
    twitter: fluid(maxWidth: 1600, maxHeight: 800, quality: 100) {
      src
    }
    facebook: fluid(maxWidth: 1600, maxHeight: 838, quality: 100) {
      src
    }
  }
`
