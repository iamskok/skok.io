const handleProgress = ({ headerRef, setProgress }) => {
  const headerHeight = headerRef.current.clientHeight

  const pageScrollOffset = window.scrollY
  const pageTotalHeight = document.body.scrollHeight
  const pageInnerHeight = window.innerHeight

  // Show progress when scrolled past `Header` component
  const isVisible = pageScrollOffset > headerHeight
  const progress = pageScrollOffset / (pageTotalHeight - pageInnerHeight)

  setProgress(isVisible ? progress : 0)
}

export default handleProgress
