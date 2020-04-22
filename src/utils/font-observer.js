const fontObserver = () => {
  (() => {
    if (sessionStorage.fontsLoaded) {
      document.documentElement.classList.add('fonts-stage-2')
      return
    } else {
      if (sessionStorage.areFontsLoaded) {
        document.documentElement.classList.add('font-loading-stage-2')
        return
      } else {
        if ('fonts' in document) {
          Promise.all([
            document.fonts.load('400 1em "Inter var"'),
            document.fonts.load('italic 400 1em "Inter var"'),
            document.fonts.load('400 1em "Fira Code VF"')
          ]).then(() => {
            document.documentElement.classList.add('font-loading-stage-2')

            // Optimization for repeat views
            sessionStorage.areFontsLoaded = true

            // Dispatch event to notify ThemeUIProvider component
            const fontsLoadedEvent = new CustomEvent('FONTS_ARE_LOADED')
            window.dispatchEvent(fontsLoadedEvent)
          })
        }
      }
    }
  })()
}

export default fontObserver