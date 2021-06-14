/** @jsx jsx */
import { jsx } from "theme-ui"
import ColorModeButton from "../ColorModeButton"
import SoundModeButton from "../SoundModeButton"
import TwitterIconLink from "../TwitterIconLink"
import GithubIconLink from "../GithubIconLink"

/* eslint-disable react/jsx-key */
const items = [
  <TwitterIconLink />,
  <GithubIconLink />,
  <ColorModeButton />,
  <SoundModeButton />,
]
/* eslint-enable react/jsx-key */

const SideNav = () => (
  <ul
    sx={{
      padding: 0,
      margin: 0,
      listStyle: `none`,
      display: `flex`,
    }}
  >
    {items.map((item, key) => (
      <li key={key}>{item}</li>
    ))}
  </ul>
)

export default SideNav
