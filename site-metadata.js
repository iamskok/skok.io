module.exports = {
  firstName: `Vladimir`,
  lastName: `Skok`,
  siteUrl: `https://skok.netlify.app`,
  logo: {
    url: `logo.jpg`,
    width: 112,
    height: 112,
  },
  language: `en`,
  socialMedia: {
    twitter: `https://twitter.com/iamskok1`,
    github: `https://github.com/iamskok`,
  },
  address: {
    addressCountry: `US`,
    addressLocality: `Atlanta`,
    addressRegion: `GA`,
  },
  speakableSelector: [`[data-speakable="true"]`],
  pages: {
    home: {
      to: `/`,
      order: 1,
      label: `Home`,
      breadcrumb: `🏠 Home`,
      title: `Vladimir Skok`,
      description: `Software engineering blog`,
      coverAlt: `Home image`,
      type: `WebPage`,
    },
    blog: {
      to: `/blog/`,
      order: 2,
      label: `Blog`,
      breadcrumb: `🗒 Blog`,
      title: `Blog`,
      description: `Thoughts on software engineering`,
      coverAlt: `Blog image`,
      type: `Blog`,
    },
    post: {
      order: false,
      type: `Article`,
      breadcrumb: `📝`,
    },
    notFound: {
      order: false,
      title: `404 | Oooops!`,
      description: `This page is not found.`,
    },
  },
  copyrightYear: new Date().getFullYear(),
  colorModes: [`default`, `light`],
  favicons: {
    checkmarkEmoji: `/favicon-checkmark-emoji.svg`,
    eyesEmoji: `/favicon-eyes-emoji.svg`,
    light: `/favicon-light.svg`,
    dark: `/favicon-dark.svg`,
  },
  components: {
    codeBlock: {
      isCopy: true,
      isFocus: true,
      isLabel: true,
    },
    intro: {
      id: `introduction`,
    },
    tableOfContents: {
      introId: `introduction`,
      introTitle: `Introduction`,
    },
  },
}
