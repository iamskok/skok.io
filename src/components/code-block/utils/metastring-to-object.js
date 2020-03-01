const metastringToObject = metastring => (
  metastring &&
  metastring.split(` `).reduce((acc, cur) => {
    if (cur.split(`=`).length > 1) {
      const t = cur.split(`=`)
      acc[t[0]] = t[1]
      return acc
    }
    acc[cur] = true
    return acc
  }, {})
)

export default metastringToObject
