/** @jsx jsx */
import { jsx } from "theme-ui"

/* eslint-disable react/display-name */
const Heading =
  Tag =>
  ({ id, children, ...rest }) => {
    if (!id) {
      return <Tag {...rest}>{children}</Tag>
    }

    return (
      <Tag id={id} sx={{ scrollMarginTop: 3 }} {...rest}>
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
              color: `secondary`,
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
