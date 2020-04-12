import { wrapRootElement } from './wrap-root-element'

const onClientEntry = () => {
  window.addEventListener('load', () => {
    (() => {
      console.log('on load event')
      alert('on load event')

      if ("fonts" in document) {
        // Optimization for Repeat Views
        if (sessionStorage.fontsLoadedCriticalFoftPreload) {
          alert('fonts-stage-2 - cached')
          document.documentElement.className += ` fonts-stage-2`
          console.log('fontsLoadedCriticalFoftPreload', true)
          return
        }

        document.fonts.load(`1em 'Inter var critical'`).then(() => {
          document.documentElement.className += ` fonts-stage-1`
          console.log('fonts-stage-1', true)
          alert('fonts-stage-1')

          Promise.all([
            document.fonts.load(`400 1em 'Inter var'`),
            document.fonts.load(`italic 400 1em 'Inter var'`),
            document.fonts.load(`400 1em 'Fira Code VF'`)
          ]).then(() => {
            document.documentElement.className += ` fonts-stage-2`
            alert('fonts-stage-2')
            console.log('fonts-stage-2', true)

            // Optimization for Repeat Views
            sessionStorage.fontsLoadedCriticalFoftPreload = true
            console.log('fontsLoadedCriticalFoftPreload was set to to true')
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