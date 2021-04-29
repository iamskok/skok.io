/** @jsx jsx */
import { jsx } from "theme-ui"
import List from "./List"
import Link from "./Link"

const renderItems = (items, activeHeader) => (
  <List>
    {items.map(({ url, title, items }) => {
      const isActive = activeHeader === url.replace(`#`, ``)

      return (
        <li key={url}>
          <Link title={title} url={url} active={isActive} />

          {items && renderItems(items, activeHeader)}
        </li>
      )
    })}
  </List>
)

export default renderItems
