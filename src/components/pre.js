/** @jsx jsx */
import { jsx } from 'theme-ui'
import Code from './code'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'

const Pre = props => {
  if (isPreWithCodeBlock(props)) {
    return (
      <pre {...props}>
        <Code {...props.children.props}>
          {props.children}
        </Code>
      </pre>
    )
  } else {
    return (
      <pre {...props}>
        {props.children.props.children}
      </pre>
    )
  }
}

export default Pre