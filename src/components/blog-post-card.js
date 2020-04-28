/** @jsx jsx */
import { jsx, Card, Button, Styled } from 'theme-ui'
import Img from 'gatsby-image'
import Link from '../components/link'
import { baseThemeSettings } from '../gatsby-plugin-theme-ui/index'

const { lineHeight } = baseThemeSettings

const BlogPostCard = ({ post }) => {
  return (
    <Card as="article">
      <Link
        to={ post.fields.slug }
        sx={{
          textDecoration: 'none'
        }}
      >
        { post.frontmatter.cover &&
          <Img
            sizes={{
              ...post.frontmatter.cover.childImageSharp.sizes,
              aspectRatio: 16 / 9
            }}
          />
        }

        <Styled.h2 sx={{
          color: 'text',
          marginTop: 0,
          lineHeight
        }}>
          { post.frontmatter.title }
        </Styled.h2>

        <Styled.p sx={{ color: 'text' }}>
          { post.excerpt }
        </Styled.p>

        <Button as="div">
          Read more
        </Button>
      </Link>
    </Card>
  )
}

export default BlogPostCard