/** @jsx jsx */
import { jsx } from 'theme-ui'
import Code from '../components/code'
import { isPreWithCodeBlock } from '../utils/is-pre-with-code-block'

export default {
  code: Code,
  pre: preProps => {
    if (isPreWithCodeBlock(preProps)) {
      return (
        <pre {...preProps}>
          <Code {...preProps.children.props}>
            {preProps.children}
          </Code>
        </pre>
      )
    } else {
      return (
        <pre {...preProps}>
          {preProps.children.props.children}
        </pre>
      )
    }
  }
}
