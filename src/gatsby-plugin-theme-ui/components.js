/** @jsx jsx */
import { jsx } from "theme-ui"
import CodeBlock from "../components/CodeBlock"
import Pre from "../components/Pre"
import BlockQuote from "../components/BlockQuote"

/* eslint react/display-name: 0 */
export default {
  code: props => <CodeBlock {...props} />,
  pre: props => <Pre {...props} />,
  blockquote: props => <BlockQuote {...props} />,
}
