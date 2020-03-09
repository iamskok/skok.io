/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const LineNumber = ({ index }) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <span sx={{
        display: 'inline-block',
        width: 40,
        userSelect: 'none',
        textAlign: 'center',
        color: prismTheme.count.color,
        backgroundColor: prismTheme.count.backgroundColor,
        marginLeft: -20,
        marginRight: 20,
        transition: 'background-color 400ms ease, color 400ms ease'
      }}>
        {++index}
      </span>
    )}
  </PrismThemeConsumer>
)

export default LineNumber