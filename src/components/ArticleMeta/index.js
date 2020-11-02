/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import ArticleDate from "../ArticleDate"
import HitCounter from "../HitCounter"

const ArticleMeta = ({ date, slug }) => {
  return (
    <Flex
      sx={{
        justifyContent: `space-between`,
        lineHeight: 0,
        marginBottom: 4,
      }}
    >
      <ArticleDate date={date} />
      <HitCounter slug={slug} />
    </Flex>
  )
}

export default ArticleMeta
