/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'

const Pre = props => {
  const { isLiveError, children } = props

  if (isPreWithCodeBlock(props)) {
    return (
      <Styled.pre {...props}>
        <CodeBlock {...children.props}>
          {children}
        </CodeBlock>
      </Styled.pre>
    )
  } else if (isLiveError) {
    return (
      <Styled.pre
        {...props}
      >
        {children}
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre
        {...props}
      >
        {children.props.children}
      </Styled.pre>
    )
  }
}

export default Pre