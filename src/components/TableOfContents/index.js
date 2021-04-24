/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import useActiveId from "../../hooks/useActiveId"

const TableOfContents = ({ items }) => {
  const idList = getIds(items)
  const activeId = useActiveId(idList)

  return (
    <Box
      as="nav"
      sx={{
        listStyle: `none`,
        position: [`relative`, `relative`, `fixed`],
        top: [0, 0, 100],
        right: 0,
        maxWidth: 400,
        marginBottom: 4,
        // paddingLeft: 3,
      }}
    >
      {/* Add open based on the breakpoint */}
      <details open>
        <summary
          sx={{
            cursor: `pointer`,
          }}
        >
          Table of Contents{" "}
          <span role="img" aria-label="Opened book emoji">
            📖
          </span>
        </summary>
        {renderItems(items, activeId)}
      </details>
    </Box>
  )
}

function renderItems(items, activeId) {
  return (
    <ol
      sx={{
        listStyle: `none`,
        margin: 0,
        paddingLeft: 3,
      }}
    >
      {items.map(({ url, title, items }) => (
        <li key={url}>
          <a
            href={url}
            sx={{
              fontSize: 1,
              color: activeId === url.slice(1) ? `primary` : `text`,
            }}
          >
            {title}
          </a>
          {items && renderItems(items, activeId)}
        </li>
      ))}
    </ol>
  )
}

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

export default TableOfContents
