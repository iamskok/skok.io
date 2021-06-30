import React, { createContext, useReducer, useRef, useEffect } from "react"
import throttle from "lodash.throttle"
import useIsMounted from "../../hooks/useIsMounted"
import handleActiveHeaderId from "./handleActiveHeaderId"
import handleProgress from "./handleProgress"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case `SET_HEADER_IDS`:
      return {
        ...state,
        ids: [...payload.ids],
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
  ids: [],
  activeHeaderId: null,
  isTocEnabled: false,
  scrollProgress: null,
}

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isMounted = useIsMounted()
  const { ids, isTocEnabled } = state

  useEffect(() => {
    dispatch({
      type: `SET_ACTIVE_HEADER_ID`,
      payload: {
        activeHeaderId: ids[0],
      },
    })
  }, [ids])

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isMounted) {
        handleProgress({
          elementId: `header`,
          dispatch,
        })

        if (isTocEnabled) {
          handleActiveHeaderId({
            ids,
            dispatch,
          })
        }
      }
    }, 200)

    window.addEventListener(`scroll`, handleScroll)

    return () => window.removeEventListener(`scroll`, handleScroll)
  }, [ids, isTocEnabled, isMounted])

  return (
    <ScrollContext.Provider value={[state, dispatch]}>
      {children}
    </ScrollContext.Provider>
  )
}

export { ScrollContext, ScrollProvider }
