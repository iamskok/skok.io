const handleActiveHeaderId = ({
  hasIntro,
  articleHeaderIds,
  setActiveHeaderId,
}) => {
  // Track central page position
  const pageScrollPosition = window.scrollY + window.innerHeight / 2
  const allArticleHeaderIds = hasIntro
    ? [`introduction`, ...articleHeaderIds]
    : articleHeaderIds

  for (let i = 0; i < allArticleHeaderIds.length; i++) {
    const topHeaderId = allArticleHeaderIds[i]
    const bottomHeaderId = allArticleHeaderIds[i + 1]
    const topHeaderPosition = document.getElementById(topHeaderId)?.offsetTop
    const bottomHeaderPosition =
      document.getElementById(bottomHeaderId)?.offsetTop || Infinity

    if (
      topHeaderPosition <= pageScrollPosition &&
      bottomHeaderPosition >= pageScrollPosition
    ) {
      return setActiveHeaderId(topHeaderId)
    }
  }
}

export default handleActiveHeaderId
