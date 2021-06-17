const duration = `200ms`

const transitions = {
  button: `background-color ${duration} ease`,
  colorModeButton: `
    color ${duration} ease,
    box-shadow ${duration} ease
  `,
  soundModeButton: `
    background-color ${duration} ease,
    color ${duration} ease
  `,
  soundModeButtonWave: `fill ${duration} ease`,
  codeBlock: `
    box-shadow ${duration} ease,
    opacity ${duration} ease
  `,
  codeBlockCopyButton: `
    box-shadow ${duration} ease,
    opacity ${duration} ease,
    background-color ${duration} ease
  `,
  blogCard: `
    box-shadow ${duration} ease,
    color ${duration} ease
  `,
  blogCardHeader: `color ${duration} ease`,
  blogCardParagraph: `color ${duration} ease`,
  link: `
    color ${duration} ease,
    box-shadow ${duration} ease
  `,
  heading: `
    color ${duration} ease,
    box-shadow ${duration} ease
  `,
  githubIconLink: `
    color ${duration} ease,
    box-shadow ${duration} ease
  `,
  paginationLink: `color ${duration} ease`,
  twitterIconLink: `color ${duration} ease`,
  tableOfContentsLink: `
    color ${duration} ease,
    opacity ${duration} ease
  `,
  progress: `opacity ${duration} ease`,
  progressBar: `width ${duration} ease`,
  progressValue: `width ${duration} ease`,
  hitCounter: `background-color ${duration} ease`,
  card: `
    box-shadow ${duration} ease,
    background-color ${duration} ease
  `,
}

export default transitions
