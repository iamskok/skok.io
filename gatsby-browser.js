import debounce from "lodash.debounce"
import updateBrowserTab from "./src/utils/update-browser-tab"
import setThemeFavicon from "./src/utils/set-theme-favicon"
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

const onClientEntry = () => setThemeFavicon()

export { wrapRootElement, onRouteUpdate, onClientEntry }
