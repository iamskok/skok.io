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
        textDecoration: `none`,
        marginBottom: 4,
      }}
    >
      <Card
        as="article"
        sx={{
          margin: 0,
          boxShadow: active ? `active` : `default`,
          borderWidth: 0,
          borderStyle: `solid`,
          borderRadius: active ? 0 : 2,
          borderColor: active ? `secondary` : `primary`,
          transition: `
            border 400ms ease,
            border-radius 400ms ease,
            box-shadow 400ms ease,
            background-color 400ms ease
          `,
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
