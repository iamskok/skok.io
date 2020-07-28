import debounce from "lodash/debounce"

const setEmoji = percent => {
  const emoji = percent < 100 ? `👀` : `✅`

  return `
    data:image/svg+xml,
    <svg
      xmlns=%22http://www.w3.org/2000/svg%22
      viewBox=%220 0 100 100%22
    >
      <text y=%22.9em%22 font-size=%2290%22>
        ${emoji}
      </text>
    </svg>
  `
}

const setFavicon = percent => {
  const favicon =
    document.querySelector(`link[rel*="icon"]`) ||
    document.createElement(`link`)
  favicon.type = `image/x-icon`
  favicon.rel = `shortcut icon`
  document.getElementsByTagName(`head`)[0].appendChild(favicon)
  favicon.href = setEmoji(percent)
}

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

  const href = window.location.href
  const url = new URL(href)
  const pathname = url.pathname

  // Fix or remove this hack and add debounce
  if (
    pathname.match(`/blog`) &&
    pathname.match(`/blog/`) &&
    pathname.length > 6
  ) {
    setFavicon(scrollPercent)
    document.title = `${scrollPercent}% ${originalTitle}`
  }
}

export default debounce(handleScrollPositionToPercent, 100)
