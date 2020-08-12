/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import WebmentionTypeCount from "./WebmentionTypeCount"
import { TwitterLike, TwitterReply, TwitterRepost } from "../Twitter"

const WebmentionTypeCounts = ({
  likeCount,
  likeSingular,
  likePlural,
  replyCount,
  replySingular,
  replyPlural,
  repostCount,
  repostSingular,
  repostPlural,
  tweet,
}) => (
  <Flex
    sx={{
      marginBottom: 4,
      justifyContent: `space-between`,
    }}
  >
    <Flex
      sx={{
        alignItems: `center`,
      }}
    >
      <TwitterReply
        tweet={tweet}
        sx={{
          marginRight: 3,
        }}
      />
      <WebmentionTypeCount
        count={replyCount}
        singular={replySingular}
        plural={replyPlural}
      />
    </Flex>
    {` `}
    <Flex
      sx={{
        alignItems: `center`,
      }}
    >
      <TwitterRepost
        tweet={tweet}
        sx={{
          marginRight: 3,
        }}
      />
      <WebmentionTypeCount
        count={repostCount}
        singular={repostSingular}
        plural={repostPlural}
      />
    </Flex>
    {` `}
    <Flex
      sx={{
        alignItems: `center`,
      }}
    >
      <TwitterLike
        tweet={tweet}
        sx={{
          marginRight: 3,
        }}
      />
      <WebmentionTypeCount
        count={likeCount}
        singular={likeSingular}
        plural={likePlural}
      />
    </Flex>
  </Flex>
)

export default WebmentionTypeCounts
