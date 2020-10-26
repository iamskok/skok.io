const loadingStage2Headers = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`]
  .map(h => `.font-loading-stage-2 ${h}`)
  .join(`,`)

const fonts = `
  .font-loading-stage-1 body {
    font-family: -apple-system, system-ui, sans-serif;
  }

  ${loadingStage2Headers} {
    font-family: 'Amstelvar';
  }

  .font-loading-stage-2 body {
    font-family: 'Inter var';
    font-feature-settings: 'kern', 'calt', 'ss01', 'ss02', 'ss03';
  }

  .font-loading-stage-2 pre,
  .font-loading-stage-2 code {
    font-family: 'Dank Mono';
  }
`

export default fonts
