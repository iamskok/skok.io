/** @jsx jsx */
import { useContext, useEffect } from "react"
import { jsx } from "theme-ui"
import { ScrollContext } from "../ScrollProvider"
import Container from "./Container"
import Details from "./Details"
import renderItems from "./render-items"

const TableOfContents = ({ items, ids }) => {
  const [{ activeHeaderId }, dispatch] = useContext(ScrollContext)

  useEffect(() => {
    dispatch({
      type: `ENABLE_TOC`,
      payload: {
        isTocEnabled: true,
      },
    })
  }, [dispatch])

  useEffect(() => {
    dispatch({
      type: `SET_HEADER_IDS`,
      payload: {
        ids: ids,
      },
    })
  }, [dispatch, ids])

  return (
    <Container>
      <Details>{renderItems(items, activeHeaderId)}</Details>
    </Container>
  )
}

export default TableOfContents
