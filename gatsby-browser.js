import debounce from "lodash.debounce"
import updateBrowserTab from "./src/utils/update-browser-tab"
import setThemeFavicon from "./src/utils/set-theme-favicon"
import setInactiveFavicon from "./src/utils/set-inactive-favicon"
import setFavicon from "./src/utils/set-favicon"
import bustCache from "./src/utils/bust-cache"
import fontObserver from "./src/utils/font-observer"
import { wrapRootElement } from "./src/components/WrapRootElement"

// TODO: Add dynamic title in templates.
const title = document.querySelector(`title`).textContent

const onBlogPostScroll = debounce(() => {
  updateBrowserTab(title)
}, 200)

const onRouteUpdate = ({ location }) => {
  const blogPostRegex = /\/blog\/.+/

  if (blogPostRegex.test(location.pathname)) {
    window.addEventListener(`scroll`, onBlogPostScroll)
  } else {
    window.removeEventListener(`scroll`, onBlogPostScroll)
    setThemeFavicon()
  }
}

const onClientEntry = () => {
  if (!sessionStorage.isEveryFontLoaded) {
    window.onload = () => {
      fontObserver().then(() => {
        sessionStorage.isEveryFontLoaded = true
      })
    }
  }

  setThemeFavicon()

  let visibilityTimer = null
  let oldFavicon = null

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === `hidden`) {
      oldFavicon = document.querySelector(`link[rel="icon"]`)

      visibilityTimer = setTimeout(() => {
        setInactiveFavicon()
        visibilityTimer = null
      }, 5000)
    } else {
      if (visibilityTimer) {
        clearTimeout(visibilityTimer)
        visibilityTimer = null
      }

      setInactiveFavicon.clear()

      // Remove old URL params
      const oldFaviconPath = oldFavicon.href.split(`?`)[0]
      setFavicon(bustCache(oldFaviconPath))
    }
  })
}

export { wrapRootElement, onRouteUpdate, onClientEntry }
