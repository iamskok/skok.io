/** @jsx jsx */
import { jsx } from "theme-ui"
import { useThemeUI } from "theme-ui"

const Heading = Tag => props => {
  const { id, children } = props
  const {
    theme: {
      styles: { a: linkStyles },
    },
  } = useThemeUI()

  if (!id) return <Tag {...props} />

  return (
    <Tag {...props}>
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
