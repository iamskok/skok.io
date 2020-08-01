// import debounce from "lodash/debounce"
import setFavicon from "../utils/set-favicon"
import emojiSVG from "../utils/emoji-svg"

const handleScrollPositionToPercent = originalTitle => {
  const html = document.documentElement
  const body = document.documentElement

  const htmlScrollTop = html.scrollTop
  const htmlScrollHeight = html.scrollHeight

  const bodyScrollTop = body.scrollTop
  const bodyScrollHeight = body.scrollHeight

  const scrollTop = htmlScrollTop || bodyScrollTop
  const scrollHeight = htmlScrollHeight || bodyScrollHeight
  const clientHeight = html.clientHeight

  const scrollPercent = Math.round(
    (scrollTop / (scrollHeight - clientHeight)) * 100
  )

  const emoji = scrollPercent < 100 ? `👀` : `✅`

  setFavicon(emojiSVG(emoji))
  document.title = `${scrollPercent}% ${originalTitle}`
}

export default handleScrollPositionToPercent
