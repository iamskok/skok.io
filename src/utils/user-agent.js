const userAgentString =
  typeof window !== `undefined` ? window.navigator.userAgent.toLowerCase() : ``

const isFirefox = () => userAgentString.includes(`firefox`)
const isChrome = () => userAgentString.includes(`chrome`)

export { isFirefox, isChrome }
