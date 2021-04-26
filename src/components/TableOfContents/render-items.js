/** @jsx jsx */
import { jsx } from "theme-ui"
import List from "./List"
import Link from "./Link"

function renderItems(items, activeId) {
  return (
    <List>
      {items.map(({ url, title, items }) => {
        const isActive = activeId === url.slice(1)

        return (
          <li key={url}>
            <Link title={title} url={url} active={isActive} />

            {items && renderItems(items, activeId)}
          </li>
        )
      })}
    </List>
  )
}

export default renderItems
