import React, { createContext, useReducer, useEffect } from "react"
import throttle from "lodash.throttle"
import handleActiveHeaderId from "./handleActiveHeaderId"
import handleProgress from "./handleProgress"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case `SET_ARTICLE_HEADER_IDS`:
      return {
        ...state,
        articleHeaderIds: [...payload.articleHeaderIds],
      }
    case `SET_ACTIVE_HEADER_ID`:
      return {
        ...state,
        activeHeaderId: payload.activeHeaderId,
      }
    case `SET_SCROLL_PROGRESS`:
      return {
        ...state,
        scrollProgress: payload.scrollProgress,
      }
  }
}

const initialState = {
  articleHeaderIds: [],
  activeHeaderId: null,
  scrollProgress: null,
}

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { articleHeaderIds } = state

  useEffect(() => {
    const handleScroll = throttle(() => {
      handleActiveHeaderId({
        articleHeaderIds,
        dispatch,
      })
      handleProgress({
        elementId: `header`,
        dispatch,
      })
    }, 200)

    window.addEventListener(`scroll`, handleScroll)

    return () => {
      window.removeEventListener(`scroll`, handleScroll)
    }
  }, [articleHeaderIds])

  return (
    <ScrollContext.Provider value={[state, dispatch]}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
