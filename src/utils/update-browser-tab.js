import setFavicon from "./set-favicon"
import documentScrollPercent from "./document-scroll-percent"
import bustCache from "./bust-cache"
import { favicons } from "../../site-metadata.js"

const updateBrowserTab = originalTitle => {
  const scrollPercent = documentScrollPercent()
  const { eyesEmoji, checkmarkEmoji } = favicons

  const faviconPath = scrollPercent < 100 ? eyesEmoji : checkmarkEmoji

  const emojiPath = bustCache(faviconPath)
  setFavicon(emojiPath)

  document.title = `${scrollPercent}% ${originalTitle}`
}

export default updateBrowserTab
