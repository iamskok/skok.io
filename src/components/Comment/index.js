/** @jsx jsx */
import { jsx, Card, Styled, Flex, useThemeUI } from "theme-ui"
import { useState } from "react"
import { format } from "date-fns"

const Comment = ({ to, src, name, text, published }) => {
  const [highlight, setHighlight] = useState(false)
  const addHighlight = () => setHighlight(true)
  const removeHighlight = () => setHighlight(false)
  const [highlightLink, setHighlightLink] = useState(false)
  const addHighlightLink = () => setHighlightLink(true)
  const removeHighlightLink = () => setHighlightLink(false)

  const {
    theme: {
      space,
      sizes: { avatar },
    },
  } = useThemeUI()

  // Calculate responsive `margin-left` values for `Styled.p`
  const StyledPMarginLeft = [space[3] + avatar[0], space[4] + avatar[1]]

  return (
    <Card
      onTouchStart={addHighlight}
      onTouchEnd={removeHighlight}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      sx={{
        boxShadow: highlight ? `active` : `default`,
        borderColor: highlight ? `secondary` : `primary`,
        marginBottom: 4,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
      }}
    >
      <div
        sx={{
          display: `flex`,
          alignItems: `center`,
          textDecoration: `none`,
        }}
      >
        <a
          href={to}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={`${name} twitter account avatar`}
          sx={{
            marginRight: [3, 4],
          }}
        >
          <img
            src={src}
            alt={`${name} twitter avatar`}
            sx={{
              borderRadius: `100%`,
              width: [avatar[0], avatar[1]],
              width: [avatar[0], avatar[1]],
            }}
          />
        </a>

        <Flex>
          <a
            href={to}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${name} twitter account`}
            onFocus={addHighlightLink}
            onBlur={removeHighlightLink}
            onTouchStart={addHighlightLink}
            onTouchEnd={removeHighlightLink}
            onMouseEnter={addHighlightLink}
            onMouseLeave={removeHighlightLink}
            sx={{
              color: highlightLink ? `secondary` : `primary`,
              margin: 0,
              textDecoration: `none`,
              transition: `color 400ms ease`,
              fontSize: [`0.75rem`, `1rem`],
              fontWeight: `bold`,
            }}
          >
            {name}
          </a>

          <div
            sx={{
              marginX: 2,
              fontSize: [`0.75rem`, `1rem`],
              fontWeight: `light`,
            }}
          >
            |
          </div>

          <time
            dateTime={published}
            sx={{
              fontSize: [`0.75rem`, `1rem`],
              fontWeight: `light`,
            }}
          >
            {format(new Date(published), `MM/dd/yy`)}
          </time>
        </Flex>
      </div>

      <Styled.p
        sx={{
          color: `text`,
          transition: `color 400ms ease`,
          flex: 1,
          fontSize: [`0.75rem`, `1rem`],
          marginLeft: StyledPMarginLeft,
          marginBottom: 0,
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></Styled.p>
    </Card>
  )
}

export default Comment
