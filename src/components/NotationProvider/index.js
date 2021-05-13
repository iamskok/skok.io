import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  createRef,
} from "react"
import useFontFaceObserver from "use-font-face-observer"
import { FONTS } from "../../utils/constants"
import isWindow from "../../utils/is-window"

const { code, body, heading } = FONTS
// `Article` component font stack.
const fontFaces = [
  {
    family: heading,
    style: `italic`,
  },
  {
    family: body,
  },
  {
    family: code,
    style: `italic`,
  },
  {
    family: code,
  },
]

// Access `Article` container DOM node.
const notationRef = createRef()
const NotationContext = createContext()

const NotationProvider = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0)
  const isFontListLoaded = useFontFaceObserver(fontFaces)

  // Memoize `resizeObserver` so we can use it outside of the `useEffect` callback.
  // Otherwise we will end up creating `resizeObserver` each time `useEffect` is called.
  const resizeObserver = useMemo(
    () =>
      isWindow() &&
      new ResizeObserver(entries =>
        setPageHeight(entries[0].target.scrollHeight)
      ),
    []
  )

  useEffect(() => {
    // Start observing page height changes (`pageHeight` state) when all of the fonts
    // are loaded (`isFontListLoaded`). Ignore page height changes until all of the
    // fonts are loaded - page height value will change when the fonts are ready.
    if (isFontListLoaded) {
      resizeObserver.observe(notationRef.current)
    }

    return () => resizeObserver.unobserve(notationRef.current)
  }, [resizeObserver, isFontListLoaded])

  return (
    <NotationContext.Provider value={{ isFontListLoaded, pageHeight }}>
      {children}
    </NotationContext.Provider>
  )
}

export { NotationContext, NotationProvider, notationRef }
