const { INTRO_ID } = require("./constants")

const introItem = {
  url: INTRO_ID,
  title: `Introduction`,
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
