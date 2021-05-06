/** @jsx jsx */
import { useContext, useEffect } from "react"
import { jsx } from "theme-ui"
import { ScrollContext } from "../ScrollProvider"
import Container from "./Container"
import Details from "./Details"
import renderItems from "./render-items"

const introductionItem = {
  url: `#introduction`,
  title: `Introduction`,
}

const TableOfContents = ({ items, articleHeaderIds }) => {
  const [{ activeHeaderId }, dispatch] = useContext(ScrollContext)
  const hasIntro = !!document.getElementById(`introduction`)

  useEffect(() => {
    dispatch({
      type: `SET_ARTICLE_HEADER_IDS`,
      payload: {
        articleHeaderIds: hasIntro
          ? [`introduction`, ...articleHeaderIds]
          : articleHeaderIds,
      },
    })
  }, [dispatch, articleHeaderIds, hasIntro])

  return (
    <Container>
      <Details>
        {renderItems(
          hasIntro ? [introductionItem, ...items] : items,
          activeHeaderId
        )}
      </Details>
    </Container>
  )
}

export default TableOfContents
