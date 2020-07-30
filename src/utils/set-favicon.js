const setFavicon = path => {
  const favicon =
    document.getElementById(`favicon`) || document.createElement(`link`)
  favicon.type = `image/svg+xml`
  favicon.rel = `icon`
  favicon.href = path
  document.getElementsByTagName(`head`)[0].appendChild(favicon)
}

export default setFavicon
