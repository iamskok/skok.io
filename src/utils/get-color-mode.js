export default () =>
  window.localStorage.getItem(`theme-ui-color-mode`) === `default`
    ? `dark`
    : `light`
