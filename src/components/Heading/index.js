/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { motion } from "framer-motion"
import Icon from "../Icon"

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
          href={`#${id}`}
          aria-label={children}
          id={id}
          sx={{
            scrollMarginTop: 3,
            marginRight: 2,
            borderRadius: 1,
            transition: `heading`,
          }}
        >
          <Icon sx={{ fill: `none`, stroke: `currentColor` }}>
            <motion.path
              sx={{
                strokeWidth: 2,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }}
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
                transition: {
                  duration: 1,
                },
              }}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </Icon>
        </Themed.a>
        {children}
      </Tag>
    )
  }

export default Heading
