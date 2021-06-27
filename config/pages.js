const pages = {
  home: {
    id: `home`,
    pathName: `/`,
    title: `Vladimir Skok`,
    description: `Software engineering blog`,
    image: `home.jpg`,
    imageAlt: `Home Page`,
    breadcrumb: `🏠 Home`,
    type: `WebPage`,
  },
  blog: {
    id: `blog`,
    pathName: `blog`,
    title: `Blog`,
    description: `Thoughts on software engineering`,
    image: `blog.jpg`,
    imageAlt: `Blog image`,
    breadcrumb: `🗒 Blog`,
    type: `Blog`,
  },
  post: {
    id: `article`,
    type: `Article`,
    breadcrumb: `📝`,
  },
}

module.exports = pages
