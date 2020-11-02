/** @jsx jsx */
import { jsx } from "theme-ui"
import ColorModeButton from "../ColorModeButton"
import SoundModeButton from "../SoundModeButton"
import TwitterIconLink from "../TwitterIconLink"
import GithubIconLink from "../GithubIconLink"

const SideNav = () => {
  return (
    <ul
      sx={{
        padding: 0,
        margin: 0,
        listStyle: `none`,
        display: `flex`,
      }}
    >
      <li>
        <TwitterIconLink />
      </li>
      <li>
        <GithubIconLink />
      </li>
      <li>
        <ColorModeButton />
      </li>
      <li>
        <SoundModeButton />
      </li>
    </ul>
  )
}

export default SideNav
