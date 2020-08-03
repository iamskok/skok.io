module.exports = {
  title: `skok.io`,
  description: `Vladimir Skok's development blog`,
  author: `Vladimir Skok`,
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
  socialMedia: {
    twitter: `https://twitter.com/iamskok`,
    github: `https://github.com/iamskok`,
  },
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
