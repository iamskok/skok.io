/** @jsx jsx */
import { jsx, Card, Styled } from "theme-ui"
import { useState } from "react"
import Img from "gatsby-image"
import Link from "../Link"

const BlogCard = ({ article }) => {
  const [active, setActive] = useState(false)
  const addActiveState = () => setActive(true)
  const removeActiveState = () => setActive(false)

  const {
    frontmatter: { title, cover, coverAlt, description },
  } = article

  return (
    <Link
      to={article.fields.slug}
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
        {cover && (
          <Img
            alt={coverAlt}
            fluid={{
              ...cover.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
          />
        )}

        <Styled.h2
          sx={{
            color: active ? `primary` : `text`,
            marginTop: 0,
            transition: `color 400ms ease`,
          }}
        >
          {title}
        </Styled.h2>

        <Styled.p
          sx={{
            color: `text`,
            transition: `color 400ms ease`,
          }}
        >
          {description}
        </Styled.p>
      </Card>
    </Link>
  )
}

export default BlogCard
