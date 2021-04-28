const getArticleHeaderIds = (items = []) =>
  items.reduce(
    acc,
    ({ url, items: childItems }) => {
      if (url) {
        acc.push(url.replace(`#`, ``))
      }

      if (childItems) {
        acc.push(...getArticleHeaderIds(childItems))
      }

      return acc
    },
    []
  )

module.exports = getArticleHeaderIds
