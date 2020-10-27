const urlConstructor = (page, siteUrl, slug) => {
  if (page === `blog-post`) {
    return `${siteUrl}/blog/${slug}`
  } else if (page === `blog`) {
    return `${siteUrl}/blog`
  } else {
    return siteUrl
  }
}

export default urlConstructor
