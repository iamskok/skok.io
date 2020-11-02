const currentURL = ({ url, slug, article, blog, about, contact }) => {
  if (article) {
    return `${url}${slug}`
  } else if (blog) {
    return `${url}/blog`
  } else if (contact) {
    return `${url}/contact`
  } else if (about) {
    return `${url}/about`
  } else {
    return url
  }
}

export default currentURL
