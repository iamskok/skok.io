/** @jsx jsx */
import { jsx } from "theme-ui"

/* eslint react/display-name: 0 */
/* eslint react-hooks/rules-of-hooks: 0 */
const Heading = Tag => props => {
  const { id, children } = props

  if (!id) return <Tag {...props} />

  return (
    <Tag
      sx={{
        scrollMarginTop: 3,
      }}
      {...props}
      data-header="true"
    >
      <a
        href={`#${id}`}
        sx={{
          textDecoration: `none`,
          fontFamily: `body`,
          marginRight: 2,
          borderRadius: 1,
          color: `primary`,
          transition: `heading`,
          "&:hover": {
            color: `gray`,
          },
          "&:focus-visible": {
            boxShadow: ({ colors: { accent } }) => `0 0 0 2px ${accent}`,
          },
        }}
      >
        #
      </a>
      {children}
    </Tag>
  )
}

export default Heading
