/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const LanguageTab = ({ language }) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <div sx={{
        color: prismTheme.plain.color,
        backgroundColor: prismTheme.plain.backgroundColor,
        fontSize: 2,
        lineHeight: 1.5,
        fontFamily: 'monospace',
        margin: '-20 0 0 0',
        transition: 'color 400ms ease, background 400ms ease',
      }}>
        {language}
      </div>
    )}
  </PrismThemeConsumer>
)

export default LanguageTab