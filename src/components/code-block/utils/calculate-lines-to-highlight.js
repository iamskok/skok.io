const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = metastring => {
  if (RE.test(metastring)) {
    const lineNumbers = RE.exec(metastring)[1]
      .split(`,`)
      .map(v => v.split(`-`)
      .map(y => parseInt(y, 10)))

    return index => {
      const lineNumber = ++index
      const inRange = lineNumbers.some(([start, end]) =>
        end ?
        lineNumber >= start && lineNumber <= end :
        lineNumber === start
      )

      return inRange
    }
  } else {
    return () => false
  }
}

export default calculateLinesToHighlight