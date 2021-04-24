/** @jsx jsx */
import { jsx } from "theme-ui"
import CodeBlock from "../components/CodeBlock"
import Pre from "../components/Pre"
import Heading from "../components/Heading"

/* eslint react/display-name: 0 */
export default {
  code: props => <CodeBlock {...props} />,
  pre: props => <Pre {...props} />,
  h2: Heading(`h2`),
  h3: Heading(`h3`),
  h4: Heading(`h4`),
  h5: Heading(`h5`),
  h6: Heading(`h6`),
}
