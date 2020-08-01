import { favicons } from "../../site-metadata"
import setFavicon from "./set-favicon"
import bustCache from "./bust-cache"

const setThemeFavicon = () => {
  const { light: faviconLight, dark: faviconDark } = favicons

  const theme = localStorage.getItem(`theme-ui-color-mode`)

  theme === `dark` || theme === `default` || theme === null
    ? setFavicon(bustCache(faviconDark))
    : setFavicon(bustCache(faviconLight))
}

export default setThemeFavicon
