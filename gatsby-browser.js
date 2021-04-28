import debounce from "lodash.debounce"
import updateBrowserTab from "./src/utils/update-browser-tab"
import setThemeFavicon from "./src/utils/set-theme-favicon"
import setInactiveFavicon from "./src/utils/set-inactive-favicon"
import setFavicon from "./src/utils/set-favicon"
import bustCache from "./src/utils/bust-cache"
import { wrapRootElement } from "./src/components/wrapRootElement"

const updateTitlePercent = debounce(() => updateBrowserTab(), 200)

const onBlogPostScrollFactory = ({ headerElements }) => event => {
  updateTitlePercent(event)
}

const onRouteUpdate = ({ location }) => {
  // Keep reference of `onBlogPostScroll` function
  // Removes the need for extra variable in the outer scope
  const onBlogPostScroll = onRouteUpdate.onBlogPostScroll
  const blogPostRegex = /\/blog\/.+/

  const headerElements = document.querySelectorAll(`[data-header]`)

  if (blogPostRegex.test(location.pathname)) {
    if (onBlogPostScroll) {
      window.removeEventListener(`scroll`, onBlogPostScroll)
    }

    onRouteUpdate.onBlogPostScroll = onBlogPostScrollFactory({ headerElements })
    window.addEventListener(`scroll`, onRouteUpdate.onBlogPostScroll)
  } else {
    window.removeEventListener(`scroll`, onBlogPostScroll)
  }

  setThemeFavicon()
}

const onClientEntry = () => {
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
      const oldFaviconPath = oldFavicon?.href.split(`?`)[0]
      setFavicon(bustCache(oldFaviconPath))
    }
  })
}

export { wrapRootElement, onRouteUpdate, onClientEntry }
