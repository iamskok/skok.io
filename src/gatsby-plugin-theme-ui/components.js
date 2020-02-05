/** @jsx jsx */
import { jsx } from 'theme-ui'
import Code from '../components/code'

export default {
  pre: preProps => {
    if (
      preProps &&
      preProps.children &&
      preProps.children.props
    ) {
      if (
        preProps.children.props.className &&
        preProps.children.props.className.includes('language-')
      ) {
        console.log('code tag', preProps)
        return <pre {...preProps}><Code {...preProps.children.props}>{preProps.children}</Code></pre>
        } else {
          console.log('pre tag', preProps)
        return <pre {...preProps}>{preProps.children.props.children}</pre>
        }
      } else {
      return null
    }
  },
  code: Code,
}
