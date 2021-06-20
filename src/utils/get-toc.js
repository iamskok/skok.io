const {
  components: {
    tableOfContents: { introId, introTitle },
  },
} = require("../../site-metadata")

const introItem = {
  url: `#${introId}`,
  title: introTitle,
}

const getHeaderIds = (items = []) =>
  items.reduce((acc, { url, items: childItems }) => {
    if (url) {
      acc.push(url.replace(`#`, ``))
    }

    if (childItems) {
      acc.push(...getHeaderIds(childItems))
    }

    return acc
  }, [])

const getToc = (items = [], hasIntro) => {
  const allItems = hasIntro ? [introItem, ...items] : items

  return {
    ids: getHeaderIds(allItems),
    items: allItems,
  }
}

module.exports = getToc
