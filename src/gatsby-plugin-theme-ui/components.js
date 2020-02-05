/** @jsx jsx */
import { jsx } from 'theme-ui'
import Code from '../components/code'

export default {
  // pre: props => console.log('pre props', props) || props.children,
  pre: props => {
    if (
      props.children &&
      props.children.props
    ) {
      if (
        props.children.props.className &&
        props.children.props.className.includes('language-')
      ) {
        console.log('code tag', props)
        return <pre {...props}><Code {...props.children.props}>{props.children}</Code></pre>
        } else {
          console.log('pre tag', props)
          return <pre {...props}>{props.children.props.children}</pre>
        }
      } else {
      return null
    }
  },
  code: Code,
}
