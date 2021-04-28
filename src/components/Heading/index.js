/** @jsx jsx */
import { jsx } from "theme-ui"
import { useThemeUI } from "theme-ui"

/* eslint react/display-name: 0 */
/* eslint react-hooks/rules-of-hooks: 0 */
const Heading = Tag => props => {
  const { id, children } = props
  const {
    theme: {
      styles: { a: linkStyles },
    },
  } = useThemeUI()

  if (!id) return <Tag {...props} />

  return (
    <Tag {...props} data-header="true">
      <a
        href={`#${id}`}
        sx={{
          ...linkStyles,
          textDecoration: `none`,
          fontFamily: `body`,
          marginRight: 2,
        }}
      >
        #
      </a>
      {children}
    </Tag>
  )
}

export default Heading
