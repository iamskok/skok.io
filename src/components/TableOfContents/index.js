/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./Container"
import Details from "./Details"
import getHeaderIds from "./get-header-ids"
import useActiveId from "../../hooks/useActiveId"
import renderItems from "./render-items"

const TableOfContents = ({ items }) => {
  const idList = getHeaderIds(items)
  const activeId = useActiveId(idList)

  return (
    <Container>
      <Details>{renderItems(items, activeId)}</Details>
    </Container>
  )
}

export default TableOfContents
