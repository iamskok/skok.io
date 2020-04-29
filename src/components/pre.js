/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'
import { baseThemeSettings } from '../gatsby-plugin-theme-ui'

const { rythm } = baseThemeSettings

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
        sx={{ marginBottom: rythm }}
      >
        { children }
      </CodeBlock>
    )
  } else if (isLiveError) {
    return (
      <Styled.pre
        {...props }
        onScroll={ addScrollbar }
        sx={{
          padding: 3,
          marginBottom: 0,
          border: 0,
          borderTopWidth: 1,
          borderStyle: `solid`,
          borderColor: `primary`,
          '&::-webkit-scrollbar': {
            height: `5px`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
          }
        }}
      >
        { children }
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre
        {...props }
        onScroll={ addScrollbar }
        sx={{
          padding: 3,
          marginBottom: rythm,
          '&::-webkit-scrollbar': {
            height: `5px`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
          }
        }}
      >
        { children.props.children }
      </Styled.pre>
    )
  }
}

export default Pre