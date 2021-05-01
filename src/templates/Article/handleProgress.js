const handleProgress = ({ headerRef, setProgress }) => {
  const headerHeight = headerRef.current.clientHeight

  const pageScrollOffset = window.scrollY
  const pageTotalHeight = document.body.scrollHeight
  const pageInnerHeight = window.innerHeight

  const progress =
    pageScrollOffset < headerHeight
      ? 0
      : pageScrollOffset / (pageTotalHeight - pageInnerHeight)

  setProgress(progress)
}

export default handleProgress
