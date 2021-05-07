const handleActiveHeaderId = ({ headerIds, dispatch, isTocDisabled }) => {
  if (!isTocDisabled) {
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
  }
}

export default handleActiveHeaderId
