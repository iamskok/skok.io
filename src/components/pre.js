/** @jsx jsx */
import { jsx, Styled, Button } from 'theme-ui'
import CodeBlock from './code-block'
import isPreWithCodeBlock from '../utils/is-pre-with-code-block'
import { PrismThemeConsumer } from './code-block/prism-theme-provider'

const Pre = props => {
  const { isLiveError, children } = props

  if (isPreWithCodeBlock(props)) {
    return (
      <PrismThemeConsumer>
        {({ changePrismTheme }) => (
          <div>
            <div sx={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}>
              <Button onClick={changePrismTheme}>
                Change theme
              </Button>
            </div>
            <Styled.pre
              {...props}
              sx={{ marginTop: 0 }}
            >
              <CodeBlock {...children.props}>
                {children}
              </CodeBlock>
            </Styled.pre>
          </div>
        )}
      </PrismThemeConsumer>
    )
  } else if (isLiveError) {
    return (
      <Styled.pre
        {...props}
        sx={{ padding: 20 }}
      >
        {children}
      </Styled.pre>
    )
  } else {
    return (
      <Styled.pre
        {...props}
        sx={{ padding: 20 }}
      >
        {children.props.children}
      </Styled.pre>
    )
  }
}

export default Pre