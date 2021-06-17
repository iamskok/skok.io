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
        margin: 0,
        padding: 0,
        marginBottom: 4,
        borderRadius: 2,
        transition: `blogCard`,
        "&:hover, &:focus": {
          ".blog-card": {
            boxShadow: `active`,
          },
          ".blog-card-header": {
            color: `primary`,
          },
        },
      }}
    >
      <Card
        as="article"
        className="blog-card"
        sx={{
          margin: 0,
          padding: 3,
          borderRadius: 2,
          boxShadow: `default`,
          transition: `card`,
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
