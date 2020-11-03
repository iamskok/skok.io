const currentPageData = ({
  pages,
  slug,
  url,
  isArticle,
  isBlog,
  isAbout,
  isContact,
}) => {
  if (isArticle) {
    return {
      ...pages.article,
      url: `${url}${slug}/`,
    }
  } else if (isBlog) {
    return {
      ...pages.blog,
      url: `${url}${pages.blog.to}`,
    }
  } else if (isContact) {
    return {
      ...pages.contact,
      url: `${url}${pages.contact.to}`,
    }
  } else if (isAbout) {
    return {
      ...pages.about,
      url: `${url}${pages.about.to}`,
    }
  } else {
    return {
      ...pages.home,
      url,
    }
  }
}

export default currentPageData
