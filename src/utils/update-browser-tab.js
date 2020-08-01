import setFavicon from "./set-favicon"
import documentScrollPercent from "./document-scroll-percent"
import bustCache from "./bust-cache"

const handleScrollPositionToPercent = originalTitle => {
  const scrollPercent = documentScrollPercent()

  const faviconPath =
    scrollPercent < 100
      ? `/favicon-eyes-emoji.svg`
      : `/favicon-checkmark-emoji.svg`

  const emojiPath = bustCache(faviconPath)
  setFavicon(emojiPath)

  document.title = `${scrollPercent}% ${originalTitle}`
}

export default handleScrollPositionToPercent
