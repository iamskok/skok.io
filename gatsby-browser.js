import setFavicon from "./src/utils/set-favicon"
import { wrapRootElement } from "./src/components/WrapRootElement"

const onClientEntry = () => {
  const darkFavicon = `/favicon.svg`
  const lightFavicon = `/favicon-light-theme.svg`
  const theme = localStorage.getItem(`theme-ui-color-mode`)

  theme === `dark` ? setFavicon(darkFavicon) : setFavicon(lightFavicon)
}

export { wrapRootElement, onClientEntry }
