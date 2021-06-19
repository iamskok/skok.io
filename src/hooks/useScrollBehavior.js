import { useEffect } from "react"
import isWindow from "../utils/is-window"

const useScrollBehavior = (type = `smooth`) => {
  const htmlElement = isWindow() && document.querySelector(`html`)

  useEffect(() => {
    htmlElement.style.scrollBehavior = type
    return () => (htmlElement.style.scrollBehavior = ``)
  }, [htmlElement, type])
}

export default useScrollBehavior
