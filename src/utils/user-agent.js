const userAgentString =
  typeof window !== `undefined` ? window.navigator.userAgent.toLowerCase() : ``

const isFirefox = () => userAgentString.includes(`firefox`)

export { isFirefox }
