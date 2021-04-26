function getHeaderIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1))
    }

    if (item.items) {
      acc.push(...getHeaderIds(item.items))
    }

    return acc
  }, [])
}

export default getHeaderIds
