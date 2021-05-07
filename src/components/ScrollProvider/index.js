import React, { createContext, useReducer, useEffect } from "react"
import throttle from "lodash.throttle"
import handleActiveHeaderId from "./handleActiveHeaderId"
import handleProgress from "./handleProgress"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case `SET_HEADER_IDS`:
      return {
        ...state,
        headerIds: [...payload.headerIds],
      }
    case `SET_ACTIVE_HEADER_ID`:
      return {
        ...state,
        activeHeaderId: payload.activeHeaderId,
      }
    case `DISABLE_TOC`:
      return {
        ...state,
        isTocDisabled: payload.isTocDisabled,
      }
    case `SET_SCROLL_PROGRESS`:
      return {
        ...state,
        scrollProgress: payload.scrollProgress,
      }
  }
}

const initialState = {
  headerIds: [],
  activeHeaderId: null,
  isTocDisabled: true,
  scrollProgress: null,
}

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { headerIds, isTocDisabled } = state

  useEffect(() => {
    dispatch({
      type: `SET_ACTIVE_HEADER_ID`,
      payload: {
        activeHeaderId: headerIds[0],
      },
    })
  }, [headerIds])

  useEffect(() => {
    const handleScroll = throttle(() => {
      handleActiveHeaderId({
        headerIds,
        dispatch,
        isTocDisabled,
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
  }, [headerIds, isTocDisabled])

  return (
    <ScrollContext.Provider value={[state, dispatch]}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
