import { wrapRootElement } from "./src/components/WrapRootElement"
import setFavicon from "./src/utils/set-favicon"
import { favicons } from "./site-metadata.js"

const onClientEntry = () => {
  const { light: faviconLight, dark: faviconDark } = favicons

  const theme = localStorage.getItem(`theme-ui-color-mode`)

  theme === `dark` || theme === `default` || theme === null
    ? setFavicon(faviconDark)
    : setFavicon(faviconLight)
}

export { wrapRootElement, onClientEntry }
