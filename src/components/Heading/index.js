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
          marginRight: 3,
          padding: 2,
          marginLeft: -2,
          borderRadius: 2,
          color: `primary`,
          transition: `heading`,
          "&:hover": {
            color: `gray`,
          },
          "&:focus": {
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
