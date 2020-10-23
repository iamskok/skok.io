/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import BlogPostDate from "../BlogPostDate"
import HitCounter from "../HitCounter"

const BlogPostMeta = ({ date, slug }) => {
  return (
    <Flex
      sx={{
        justifyContent: `space-between`,
        lineHeight: 0,
        marginBottom: 4,
      }}
    >
      <BlogPostDate date={date} />
      <HitCounter slug={slug} />
    </Flex>
  )
}

export default BlogPostMeta
