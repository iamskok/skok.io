/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

const BlogPostCover = ({ alt, src }) => {
  const {
    childImageSharp: { sizes, fluid },
  } = src

  return (
    <Img
      alt={alt}
      sizes={sizes}
      fluid={fluid}
      sx={{
        marginBottom: 5,
      }}
    />
  )
}

export default BlogPostCover
