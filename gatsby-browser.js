import { wrapRootElement } from './wrap-root-element'

const onClientEntry = () => {
  window.addEventListener('load', () => {
    (() => {
      if ("fonts" in document) {
        // Optimization for Repeat Views
        if (sessionStorage.fontsLoaded) {
          document.documentElement.className += ` fonts-loaded`
          return
        }

        Promise.all([
          document.fonts.load(`400 1em 'Inter var'`),
          document.fonts.load(`italic 400 1em 'Inter var'`),
          document.fonts.load(`400 1em 'Fira Code VF'`)
        ]).then(() => {
          document.documentElement.className += ` fonts-loaded`

          // Optimization for Repeat Views
          sessionStorage.fontsLoaded = true
        })
      }
    })()
  })
}

export {
  wrapRootElement,
  onClientEntry
}