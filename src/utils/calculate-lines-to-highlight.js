const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(`,`)
      .map(v => v.split(`-`)
      .map(y => parseInt(y, 10)))

    return index => {
      const lineNumber = index + 1
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