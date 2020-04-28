/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'
import { baseThemeSettings } from '../gatsby-plugin-theme-ui'

const { rythm } = baseThemeSettings

const Pre = props => {
  const { isLiveError, children } = props

  if (isPreWithCodeBlock(props)) {
    return (
      <CodeBlock
        {...children.props}
        sx={{ marginBottom: rythm }}
      >
        {children}
      </CodeBlock>
    )
  } else if (isLiveError) {
    return (
      <Styled.pre
        {...props}
        sx={{
          padding: 3,
          marginBottom: 0,
        }}
      >
        {children}
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre
        {...props}
        sx={{
          padding: 3,
          marginBottom: rythm,
        }}
      >
        {children.props.children}
      </Styled.pre>
    )
  }
}

export default Pre