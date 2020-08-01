import debounce from "lodash.debounce"
import { wrapRootElement } from "./src/components/WrapRootElement"
import updateBrowserTab from "./src/utils/update-browser-tab"
import setFavicon from "./src/utils/set-favicon"
import bustCache from "./src/utils/bust-cache"

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
    const favicon = bustCache(`/favicon.png`)
    setFavicon(favicon)
  }
}

export { wrapRootElement, onRouteUpdate }
