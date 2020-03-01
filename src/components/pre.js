/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { Fragment } from 'react'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'
import PrismContext from './code-block/prism-context'

const Pre = props => {
  const themeUI = useThemeUI()
  console.log('themeUI', themeUI)
  if (isPreWithCodeBlock(props)) {
    return (
      <PrismContext.Consumer>
        { ({name}) => (
          <Fragment>
            <button>{name}</button>
            <Styled.pre {...props}>
              <CodeBlock {...props.children.props}>
                {props.children}
              </CodeBlock>
            </Styled.pre>
          </Fragment>
        )}
      </PrismContext.Consumer>
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