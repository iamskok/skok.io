const setIcon = percent => {
  const icon = percent < 100 ? "👀" : "✅"

  return `
    data:image/svg+xml,
    <svg
      xmlns=%22http://www.w3.org/2000/svg%22
      viewBox=%220 0 100 100%22
    >
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim()
}

const handleScrollPositionToPercent = originalTitle => {
  const scrollTop = window.scrollY
  const docHeight = document.body.offsetHeight
  const winHeight = window.innerHeight
  const favicon = document.querySelector("#favicon")
  const scrollPercent = scrollTop / (docHeight - winHeight)
  const scrollPercentRounded = Math.round(scrollPercent * 100)
  const documentScrollHeight = document.documentElement.scrollHeight

  console.log("scrollTop", scrollTop)
  console.log("docHeight", docHeight)
  console.log("winHeight", winHeight)
  console.log("scrollPercent", scrollPercent)
  console.log("scrollPercentRounded", scrollPercentRounded)
  console.log("scrollHeight", document.documentElement.scrollHeight)

  document.title = `${scrollPercentRounded}% ${originalTitle}`
  // favicon.href = setIcon(scrollPercentRounded)
}

export default handleScrollPositionToPercent
