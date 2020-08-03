module.exports = {
  title: `skok.io`,
  description: `Vladimir Skok's development blog`,
  author: `Vladimir Skok`,
  siteUrl: `https://skok.io`,
  navigation: [
    {
      to: `/blog`,
      label: `blog`,
    },
    {
      to: `/about`,
      label: `about`,
    },
  ],
  codeBlock: {
    lineNumbers: true,
    lineNumbersButton: true,
    copyButton: true,
    languageTab: true,
  },
  colorModes: [`default`, `light`],
  favicons: {
    checkmarkEmoji: `/favicon-checkmark-emoji.svg`,
    eyesEmoji: `/favicon-eyes-emoji.svg`,
    light: `/favicon-light.svg`,
    dark: `/favicon-dark.svg`,
  },
}
