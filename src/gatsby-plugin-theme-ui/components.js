/** @jsx jsx */
import { jsx } from 'theme-ui'
import Code from '../components/code'
import Pre from '../components/pre'

export default {
  code: props => <Code {...props} />,
  pre: props => <Pre {...props} />
}
