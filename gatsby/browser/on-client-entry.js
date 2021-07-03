import setInactiveFavicon from "../../src/utils/set-inactive-favicon"
import setFavicon from "../../src/utils/set-favicon"
import bustCache from "../../src/utils/bust-cache"
import { INACTIVE_FAVICON_TIMEOUT } from "../../src/utils/constants"

const onClientEntry = () => {
  let visibilityTimer = null
  let oldFavicon = null

  document.addEventListener(`visibilitychange`, () => {
    if (document.visibilityState === `hidden`) {
      oldFavicon = document.querySelector(`link[rel="icon"]`)

      visibilityTimer = setTimeout(() => {
        setInactiveFavicon()
        visibilityTimer = null
      }, INACTIVE_FAVICON_TIMEOUT)
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

export default onClientEntry
