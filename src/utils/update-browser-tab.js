import documentScrollPercent from "./document-scroll-percent"
import bustCache from "./bust-cache"
import setFavicon from "./set-favicon"
import getPageTitle from "./get-page-title"
import getColorMode from "./get-color-mode"
import { favicons } from "../../site-metadata.js"

const percentTitleRegex = /(^\d{1,3}%)/
const zeroPercentTitleRegex = /^0%/

const updateBrowserTab = () => {
  const originalColorMode = getColorMode()
  const originalPageTitle = getPageTitle()
  const { eyesEmoji, checkmarkEmoji } = favicons
  const originalFavicon = favicons[originalColorMode]
  const scrollPercent = documentScrollPercent()

  const faviconPath =
    scrollPercent < 100
      ? scrollPercent === 0
        ? originalFavicon
        : eyesEmoji
      : checkmarkEmoji

  setFavicon(bustCache(faviconPath))

  if (originalPageTitle.match(percentTitleRegex)) {
    document.title = document.title.replace(
      percentTitleRegex,
      `${scrollPercent}%`
    )
  } else {
    document.title = `${scrollPercent}% ${originalPageTitle}`
  }

  // Set initial favicon when percent value is 0%.
  if (document.title.match(zeroPercentTitleRegex)) {
    document.title = document.title.replace(zeroPercentTitleRegex, ``)
  }
}

export default updateBrowserTab
