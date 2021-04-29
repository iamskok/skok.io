/** @jsx jsx */
import { jsx } from "theme-ui"
import Container from "./Container"
import Details from "./Details"
import renderItems from "./render-items"

const TableOfContents = ({ items, activeHeader, hasIntro }) => {
  const introductionItem = {
    url: `#introduction`,
    title: `Introduction`,
  }

  return (
    <Container>
      <Details>
        {renderItems(
          hasIntro ? [introductionItem, ...items] : items,
          activeHeader
        )}
      </Details>
    </Container>
  )
}

export default TableOfContents
