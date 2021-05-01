const handleProgress = ({ headerRef, setProgress }) => {
  const pageScrollOffset = window.scrollY
  const pageTotalHeight = document.body.scrollHeight
  const pageInnerHeight = window.innerHeight

  const scrollPercent =
    pageScrollOffset < headerRef.current.clientHeight
      ? 0
      : Math.round(
          (pageScrollOffset / (pageTotalHeight - pageInnerHeight)) * 100
        )

  setProgress(scrollPercent)
}

export default handleProgress
