/** @jsx jsx */
import { jsx, Box } from "theme-ui"
// import { useInView } from "react-intersection-observer"

const inViewOptions = {
  threshold: 0.1,
}

const TableOfContent = ({ items }) => {
  // const { ref, inView } = useInView(inViewOptions)
  // const ids = getIds(items)

  return (
    <Box>
      <span>Table Of Content</span>
      <nav>
        <ol
          sx={{
            listStyle: `none`,
            paddingLeft: 0
          }}
        >
          {items.map(({ url, title, items: childrenItems }) => (
            <li key={url}>
              <a href={url}>{title}</a>
              {childrenItems && renderItems(childrenItems)}
            </li>
          ))}
        </ol>
      </nav>
    </Box>
  )
}

function renderItems(items) {
  // console.log('childrenItems', items)
  return (
    <ol
      sx={{
        listStyle: `none`,
        paddingLeft: 3
      }}
    >
      {items.map(({ url, title, items: childrenItems }) => (
        <li key={url}>
          <a href={url}>{title}</a>
          {childrenItems && renderItems(childrenItems)}
        </li>
      ))}
    </ol>
  )
}

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, [])
}

export default TableOfContent
