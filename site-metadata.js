module.exports = {
  title: `Vladimir Skok`,
  description: `Software engineering blog`,
  authorFirstName: `Vladimir`,
  authorLastName: `Skok`,
  // siteUrl: `https://skok.netlify.app`,
  siteUrl: `https://deploy-preview-149--skok.netlify.app`,
  siteName: `Vladimir Skok`,
  cover: `/cover.jpg`,
  coverAlt: `Husky dog`,
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
    twitter: `https://twitter.com/iamskok1`,
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
