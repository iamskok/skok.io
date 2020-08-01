const documentScrollPercent = () => {
  const html = document.documentElement
  const body = document.body

  const htmlScrollTop = html.scrollTop
  const htmlScrollHeight = html.scrollHeight

  const bodyScrollTop = body.scrollTop
  const bodyScrollHeight = body.scrollHeight

  const scrollTop = htmlScrollTop || bodyScrollTop
  const scrollHeight = htmlScrollHeight || bodyScrollHeight
  const clientHeight = html.clientHeight

  const scrollPercent = Math.round(
    (scrollTop / (scrollHeight - clientHeight)) * 100
  )

  return scrollPercent
}

export default documentScrollPercent
