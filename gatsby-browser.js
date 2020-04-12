import { wrapRootElement } from './wrap-root-element'

const onClientEntry = () => {
  window.addEventListener(`load`, () => {
    (() => {
      if (`fonts` in document) {
        // Optimization for Repeat Views
        if (sessionStorage.fontsLoadedCriticalFoftPreload) {
          document.documentElement.className += ` fonts-loaded-2`
          return
        }

        document.fonts.load(`1em 'Inter critical'`).then(() => {
          document.documentElement.className += ` fonts-loaded-1`

          Promise.all([
            document.fonts.load(`400 1em 'Inter var'`),
            document.fonts.load(`italic 400 1em 'Inter var'`),
            document.fonts.load(`400 1em 'Fira Code VF'`)
          ]).then(() => {
            alert('all fonts')
            document.documentElement.className += ` fonts-loaded-2`

            // Optimization for Repeat Views
            sessionStorage.fontsLoadedCriticalFoftPreload = true
          })
        })
      }
    })()
  })
}

export {
  wrapRootElement,
  onClientEntry
}