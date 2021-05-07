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
    case `ENABLE_TOC`:
      return {
        ...state,
        isTocEnabled: payload.isTocEnabled,
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
  isTocEnabled: false,
  scrollProgress: null,
}

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { headerIds, isTocEnabled } = state

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
      handleProgress({
        elementId: `header`,
        dispatch,
      })

      if (isTocEnabled) {
        handleActiveHeaderId({
          headerIds,
          dispatch,
        })
      }
    }, 200)

    window.addEventListener(`scroll`, handleScroll)

    return () => {
      window.removeEventListener(`scroll`, handleScroll)
    }
  }, [headerIds, isTocEnabled])

  return (
    <ScrollContext.Provider value={[state, dispatch]}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
