const durationShort = `200ms`
const durationMedium = `400ms`

const transitions = {
  button: `background-color ${durationMedium} ease`,
  colorModeButton: `
    transform ${durationMedium} ease,
    color ${durationMedium} ease
  `,
  soundModeButton: `
    background-color ${durationMedium} ease,
    fill ${durationMedium} ease,
    color ${durationMedium} ease
  `,
  soundModeButtonWave: `fill ${durationMedium} ease`,
  codeBlockCopyButton: `
    opacity ${durationShort} ease,
    background-color ${durationShort} ease
  `,
  codeBlockLanguageLabelIsFocused: `box-shadow ${durationShort} ease`,
  globalStyles: `box-shadow ${durationShort} ease`,
  blogCardHeader: `color ${durationMedium} ease`,
  blogCardParagraph: `color ${durationMedium} ease`,
  a: `color ${durationMedium} ease`,
  githubIconLink: `color ${durationMedium} ease`,
  paginationLink: `color ${durationMedium} ease`,
  twitterIconLink: `color ${durationMedium} ease`,
  tableOfContentsLink: `
    color ${durationMedium} ease,
    opacity ${durationMedium} ease
  `,
  progress: `opacity ${durationShort} ease`,
  progressBar: `width ${durationMedium} ease`,
  progressValue: `width ${durationMedium} ease`,
  hitCounter: `background-color ${durationMedium} ease`,
  card: `
    border ${durationMedium} ease,
    border-radius ${durationMedium} ease,
    box-shadow ${durationMedium} ease,
    background-color ${durationMedium} ease
  `,
}

export default transitions
