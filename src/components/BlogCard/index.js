/** @jsx jsx */
import { jsx, Card, Themed } from "theme-ui"
import Img from "gatsby-image"
import Link from "../Link"

const BlogCard = ({ article }) => {
  const {
    frontmatter: { title, cover, coverAlt, description },
  } = article

  return (
    <Link
      to={article.fields.slug}
      sx={{
        textDecoration: `none`,
        marginBottom: 4,
        transition: `blogCard`,
        "&:hover, &:focus": {
          padding: 0,
          marginBottom: 4,
          ".blog-card": {
            boxShadow: `active`,
          },
          ".blog-card-header": {
            color: `primary`,
          },
        },
        "&:focus": {
          boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
        },
      }}
    >
      <Card as="article" className="blog-card">
        {cover && (
          <Img
            alt={coverAlt}
            fluid={{
              ...cover.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
          />
        )}

        <Themed.h2
          className="blog-card-header"
          sx={{
            color: `text`,
            marginTop: 0,
            transition: `blogCardHeader`,
          }}
        >
          {title}
        </Themed.h2>

        <Themed.p
          sx={{
            color: `text`,
            transition: `blogCardHeaderParagraph`,
          }}
        >
          {description}
        </Themed.p>
      </Card>
    </Link>
  )
}

export default BlogCard
