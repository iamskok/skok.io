/** @jsx jsx */
import { useContext, useEffect } from "react"
import { jsx } from "theme-ui"
import { ScrollContext } from "../ScrollProvider"
import Container from "./Container"
import Details from "./Details"
import renderItems from "./render-items"

const TableOfContents = ({ items, ids }) => {
  const [{ activeId }, dispatch] = useContext(ScrollContext)

  useEffect(() => {
    dispatch({
      type: `SHOW_TABLE_OF_CONTENTS`,
      payload: {
        isVisible: true,
      },
    })
  }, [dispatch])

  useEffect(() => {
    dispatch({
      type: `SET_HEADER_IDS`,
      payload: {
        ids,
      },
    })
  }, [dispatch, ids])

  return (
    <Container>
      <Details>{renderItems(items, activeId)}</Details>
    </Container>
  )
}

export default TableOfContents
