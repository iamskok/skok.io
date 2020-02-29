const isPreWithCodeBlock = preProps => (
  preProps.children &&
  preProps.children.props &&
  preProps.children.props.mdxType === `code` &&
  preProps.children.props.className &&
  preProps.children.props.className.includes(`language-`) ?
  true :
  false
)

export default isPreWithCodeBlock