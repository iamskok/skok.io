/** @jsx jsx */
import { jsx } from "theme-ui"
import List from "./List"
import Link from "./Link"

function renderItems(items, activeHeader) {
  return (
    <List>
      {items.map(({ url, title, items }) => {
        const isActive = activeHeader === url.slice(1)

        return (
          <li key={url}>
            <Link title={title} url={url} active={isActive} />

            {items && renderItems(items, activeHeader)}
          </li>
        )
      })}
    </List>
  )
}

export default renderItems
