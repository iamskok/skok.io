/** @jsx jsx */
import { jsx, Card, Styled } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Link from "../components/link"
import StyledButton from "../components/button"
import { baseThemeSettings } from "../theme"

const { lineHeight } = baseThemeSettings

const BlogPostCard = ({ post }) => {
  const [touchStart, setTouchStart] = useState(false)
  const addShadow = () => setTouchStart(true)
  const removeShadow = () => setTouchStart(false)

  return (
    <Card
      as='article'
      onTouchStart={addShadow}
      onTouchEnd={removeShadow}
      sx={{
        boxShadow: touchStart ? `active` : `default`,
      }}
    >
      <Link
        to={post.fields.slug}
        sx={{
          textDecoration: "none",
        }}
      >
        {post.frontmatter.cover && (
          <Img
            sizes={{
              ...post.frontmatter.cover.childImageSharp.sizes,
              aspectRatio: 16 / 9,
            }}
          />
        )}

        <Styled.h2
          sx={{
            color: "text",
            marginTop: 0,
            lineHeight,
          }}
        >
          {post.frontmatter.title}
        </Styled.h2>

        <Styled.p sx={{ color: "text" }}>{post.excerpt}</Styled.p>

        <StyledButton as='div'>Read more</StyledButton>
      </Link>
    </Card>
  )
}

export default BlogPostCard
