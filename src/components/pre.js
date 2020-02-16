/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'

const Pre = props => {
  if (isPreWithCodeBlock(props)) {
    return (
      <Styled.pre {...props}>
        <CodeBlock {...props.children.props}>
          {props.children}
        </CodeBlock>
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre {...props}>
        {props.children.props.children}
      </Styled.pre>
    )
  }
}

export default Pre