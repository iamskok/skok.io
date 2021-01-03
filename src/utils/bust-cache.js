const bustCache = path =>
  `${path}?v=${Math.random().toString().replace(`0.`, ``)}`

export default bustCache
