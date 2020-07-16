/** @jsx jsx */
import { jsx } from "theme-ui"
import CodeBlock from "../components/code-block"
import Pre from "../components/pre"

/* eslint react/display-name: 0 */
export default {
  code: props => <CodeBlock {...props} />,
  pre: props => <Pre {...props} />,
}
