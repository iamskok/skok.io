/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState } from "react"

const Repost = props => {
  const [highlight, setHighlight] = useState(false)
  const addHighlight = () => setHighlight(true)
  const removeHighlight = () => setHighlight(false)

  return (
    <Styled.a
      as={props.tweet ? `a` : `div`}
      href={`https://twitter.com/intent/retweet?tweet_id=${props.tweet}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter repost"
      onFocus={addHighlight}
      onBlur={removeHighlight}
      onTouchStart={addHighlight}
      onTouchEnd={removeHighlight}
      onMouseEnter={addHighlight}
      onMouseLeave={removeHighlight}
      {...props}
      sx={{
        display: `flex`,
        color: `secondary`,
        color: highlight ? `secondary` : `primary`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        sx={{
          width: 24,
          height: 24,
          fill: `currentColor`,
        }}
      >
        <g>
          <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
        </g>
      </svg>
    </Styled.a>
  )
}

export default Repost
