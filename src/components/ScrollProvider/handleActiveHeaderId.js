const handleActiveHeaderId = ({ headerIds, dispatch }) => {
  // Track central page position
  const pageScrollPosition = window.scrollY + window.innerHeight / 2

  for (let i = 0; i < headerIds.length; i++) {
    const topHeaderId = headerIds[i]
    const bottomHeaderId = headerIds[i + 1]
    const topHeaderPosition = document.getElementById(topHeaderId)?.offsetTop
    const bottomHeaderPosition =
      document.getElementById(bottomHeaderId)?.offsetTop || Infinity

    if (
      topHeaderPosition <= pageScrollPosition &&
      bottomHeaderPosition >= pageScrollPosition
    ) {
      return dispatch({
        type: `SET_ACTIVE_HEADER_ID`,
        payload: {
          activeHeaderId: topHeaderId,
        },
      })
    }
  }

  // When no match found set first header as active.
  // Fixes fast scrolling issue when active header is not picked up.
  dispatch({
    type: `SET_ACTIVE_HEADER_ID`,
    payload: {
      activeHeaderId: headerIds[0],
    },
  })
}

export default handleActiveHeaderId
