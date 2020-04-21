const fontObserver = () => {
  (() => {
    if ('fonts' in document) {
      // Optimization for Repeat Views
      if (sessionStorage.fontsLoaded) {
        document.documentElement.classList.add('fonts-loaded')
        return
      }

      Promise.all([
        document.fonts.load('400 1em "Inter var"'),
        document.fonts.load('italic 400 1em "Inter var"'),
        document.fonts.load('400 1em "Fira Code VF"')
      ]).then(() => {
        document.documentElement.classList.add('fonts-loaded')

        // Optimization for Repeat Views
        sessionStorage.fontsLoaded = true
      })
    }
  })()
}

export default fontObserver