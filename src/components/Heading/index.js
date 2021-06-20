/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

/* eslint-disable react/display-name */
const Heading =
  Tag =>
  ({ id, children, ...rest }) => {
    if (!id) {
      return <Tag {...rest}>{children}</Tag>
    }

    return (
      <Tag {...rest} id={id} sx={{ scrollMarginTop: 3 }}>
        <Themed.a
          href={`#${id}`}
          aria-label={children}
          sx={{
            marginRight: 2,
            borderRadius: 1,
            transition: `heading`,
          }}
        >
          #
        </Themed.a>
        {children}
      </Tag>
    )
  }

export default Heading
