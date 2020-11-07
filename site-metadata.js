module.exports = {
  firstName: `Vladimir`,
  lastName: `Skok`,
  // siteUrl: `https://skok.netlify.app`,
  siteUrl: `https://deploy-preview-149--skok.netlify.app`,
  logo: `/logo-small.jpg`,
  avatar: `/avatar.jpg`,
  language: `en_US`,
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
    contact: {
      to: `/contact/`,
      order: 3,
      label: `Contact`,
      breadcrumb: `✉️ Contact`,
      title: `Contact Vladimir Skok`,
      description: `Vladimir Skok's contact information`,
      coverAlt: `Contact image`,
      type: `ContactPage`,
    },
    about: {
      to: `/about/`,
      order: 4,
      label: `About`,
      breadcrumb: `ℹ️ About`,
      title: `About Vladimir Skok`,
      description: `Vladimir Skok's bio`,
      coverAlt: `About image`,
      type: `AboutPage`,
    },
    article: {
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
  socialMedia: {
    twitter: `https://twitter.com/iamskok1`,
    github: `https://github.com/iamskok`,
  },
  address: {
    addressLocality: `Atlanta`,
    addressRegion: `GA`,
    postalCode: `30339`,
    streetAddress: ``,
  },
  email: `name@example.com`,
  telephone: ``,
  jobTitle: `Software Engineer`,
  genre: `Software Engineering`,
  speakableSelector: [`[data-speakable="true"]`],
  copyrightYear: new Date().getFullYear(),
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
