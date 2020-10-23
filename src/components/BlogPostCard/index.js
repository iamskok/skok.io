/** @jsx jsx */
import { jsx, Card, Styled } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Link from "../Link"

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
          boxShadow: active ? `active` : `default`,
          borderRadius: 2,
          borderColor: active ? `secondary` : `primary`,
        }}
      >
        {post.frontmatter.cover && (
          <Img
            alt={post.frontmatter.coverAlt}
            sizes={{
              ...post.frontmatter.cover.childImageSharp.sizes,
              aspectRatio: 16 / 9,
            }}
            fluid={post.frontmatter.cover.childImageSharp.fluid}
          />
        )}

        <Styled.h2
          sx={{
            color: active ? `primary` : `text`,
            marginTop: 0,
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
