const INTRODUCTION_ITEM = {
  url: `#introduction`,
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
  const allItems = hasIntro ? [INTRODUCTION_ITEM, ...items] : items

  return {
    ids: getHeaderIds(allItems),
    items: allItems,
  }
}

module.exports = getToc
