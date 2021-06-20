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
      <Tag {...rest}>
        <Themed.a
          id={id}
          href={`#${id}`}
          aria-label={children}
          sx={{
            scrollMarginTop: 3,
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
