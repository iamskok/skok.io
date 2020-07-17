/** @jsx jsx */
import { jsx, Card, Styled } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Link from "../components/link"
import { baseThemeSettings } from "../theme"

const { lineHeight } = baseThemeSettings
const BlogPostCard = ({ post }) => {
  const [active, setActive] = useState(false)
  const addActiveState = () => setActive(true)
  const removeActiveState = () => setActive(false)

  return (
    <Link
      to={post.fields.slug}
      onFocus={addActiveState}
      onBlur={removeActiveState}
      onTouchStart={addActiveState}
      onTouchEnd={removeActiveState}
      onMouseEnter={addActiveState}
      onMouseLeave={removeActiveState}
      sx={{
        textDecoration: "none",
      }}
    >
      <Card
        as="article"
        sx={{
          boxShadow: active ? `active` : `default`,
          borderWidth: theme => `${theme.borderWidths[0]}px`,
          borderStyle: `solid`,
          borderColor: `secondary`,
          transition: `border 400ms ease, box-shadow 400ms ease, background-color 400ms ease`,
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
            color: active ? `primary` : `text`,
            marginTop: 0,
            lineHeight,
            transition: `color 400ms ease`,
          }}
        >
          {post.frontmatter.title}
        </Styled.h2>

        <Styled.p
          sx={{
            color: `text`,
            transition: `color 400ms ease`,
          }}
        >
          {post.excerpt}
        </Styled.p>
      </Card>
    </Link>
  )
}

export default BlogPostCard
