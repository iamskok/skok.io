/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useState } from "react"
import CodeBlock from "../CodeBlock"
import isPreWithCodeBlock from "../../utils/is-pre-with-code-block"

const Pre = props => {
  const { isLiveError, children } = props
  const [scrollbar, setScrollbar] = useState(false)

  const addScrollbar = () => {
    setScrollbar(true)
    setTimeout(() => {
      setScrollbar(false)
    }, 5000)
  }

  if (isPreWithCodeBlock(props)) {
    return (
      <CodeBlock
        {...children.props}
        sx={{
          margin: 0,
          marginBottom: 4,
        }}
      >
        {children}
      </CodeBlock>
    )
  } else if (isLiveError) {
    return (
      <Styled.pre
        {...props}
        onScroll={addScrollbar}
        sx={{
          padding: 3,
          border: 0,
          borderTopWidth: 1,
          borderStyle: `solid`,
          borderColor: `primary`,
          "&::-webkit-scrollbar": {
            height: `5px`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
          },
        }}
      >
        {children}
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre
        {...props}
        onScroll={addScrollbar}
        sx={{
          padding: 3,
          margin: 0,
          marginBottom: 4,
          "&::-webkit-scrollbar": {
            height: `5px`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
          },
        }}
      >
        {children.props.children}
      </Styled.pre>
    )
  }
}

export default Pre
