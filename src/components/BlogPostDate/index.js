/** @jsx jsx */
import { jsx } from "theme-ui"

const PostDate = ({ date }) => (
  <time
    sx={{
      fontSize: 2,
    }}
  >
    {date}
  </time>
)

export default PostDate
