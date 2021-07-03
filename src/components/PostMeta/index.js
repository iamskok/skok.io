/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import HitCounter from "../HitCounter"

const PostMeta = ({ date, slug }) => {
  return (
    <Flex
      sx={{
        justifyContent: `space-between`,
        lineHeight: 0,
        marginBottom: 4,
      }}
    >
      <time sx={{ fontSize: 2 }}>{date}</time>
      <HitCounter slug={slug} />
    </Flex>
  )
}

export default PostMeta
