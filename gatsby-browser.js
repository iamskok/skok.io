import { wrapRootElement } from './wrap-root-element'

const onClientEntry = () => {
  window.addEventListener('load', () => {
    (function () {
      if (document !== undefined && "fonts" in document) {
        // Optimization for Repeat Views
        if (sessionStorage.fontsLoadedCriticalFoftPreload) {
          document.documentElement.className += " fonts-stage-2";
          console.log('fontsLoadedCriticalFoftPreload', true);
          return;
        }

        document.fonts.load(`1em 'Inter var critical'`).then(function () {
          document.documentElement.className += " fonts-stage-1";
          console.log('fonts-stage-1', true)

          Promise.all([
            document.fonts.load(`400 1em 'Inter var'`),
            document.fonts.load(`italic 400 1em 'Inter var'`),
            document.fonts.load(`400 1em 'Fira Code VF'`)
          ]).then(function () {
            document.documentElement.className += " fonts-loaded-2";
            console.log('fonts-stage-2', true)

            // Optimization for Repeat Views
            sessionStorage.fontsLoadedCriticalFoftPreload = true;
          });
        });
      }
    })()
  });
}

export {
  wrapRootElement,
  onClientEntry
}