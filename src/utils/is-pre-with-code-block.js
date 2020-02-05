exports.isPreWithCodeBlock = preProps => {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === `code` &&
    preProps.children.props.className &&
    preProps.children.props.className.includes(`language-`)
  ) {
    return true
  } else {
    return false
  }
}