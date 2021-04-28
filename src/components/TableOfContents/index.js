/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./Container"
import Details from "./Details"
// import getHeaderIds from "./get-header-ids"
// import useActiveId from "../../hooks/useActiveId"
import renderItems from "./render-items"

const TableOfContents = ({ items, activeHeader, withIntro }) => {
  // const idList = getHeaderIds(items)
  // const activeId = useActiveId(idList)

  const introductionItem = {
    url: `#introduction`,
    title: `Introduction`,
  }

  return (
    <Container>
      <Details>
        {renderItems(
          withIntro ? [introductionItem, ...items] : items,
          activeHeader
        )}
      </Details>
    </Container>
  )
}

export default TableOfContents
