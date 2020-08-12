module.exports = {
  title: `skok.io`,
  description: `Vladimir Skok's development blog`,
  author: `Vladimir Skok`,
  // siteUrl: `https://skok.io`,
  siteUrl: `https://skok.club`,
  microformats2: {
    photo: `https://pbs.twimg.com/profile_images/720846092531707905/fit8T8Xa_400x400.jpg`,
    bday: `1990-9-28`,
    locality: `Atlanta`,
    region: `Georgia`,
    countryName: `USA`,
    note: `Software Engineer`,
  },
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
