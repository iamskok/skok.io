/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'

const Pre = props => {
  const { isLiveError, children } = props

  if (isPreWithCodeBlock(props)) {
    return (
      <CodeBlock {...children.props}>
        {children}
      </CodeBlock>
    )
  } else if (isLiveError) {
    return (
      <Styled.pre
        {...props}
        sx={{ padding: 20 }}
      >
        {children}
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre
        {...props}
        sx={{
          padding: 20,
          marginBottom: 20
        }}
      >
        {children.props.children}
      </Styled.pre>
    )
  }
}

export default Pre