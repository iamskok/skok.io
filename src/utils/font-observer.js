const fontObserver = () => {
  (() => {
    if (sessionStorage.fontsLoaded) {
      document.documentElement.classList.add('fonts-loaded')
      return
    } else {
      if ('fonts' in document) {
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
    }
  })()
}

export default fontObserver