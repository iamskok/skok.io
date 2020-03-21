/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const FileName = ({ name }) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <div sx={{ overflowX: 'hidden' }}>
        <div sx={{
          overflowX: 'scroll',
          backgroundColor: prismTheme.plain.backgroundColor,
          transition: 'background-color 400ms ease'
        }}>
          <p sx={{
            paddingLeft: 20,
            paddingBottom: 20,
            fontSize: 4,
            lineHeight: 1.5,
            fontFamily: 'monospace',
            fontWeight: 'bold',
            display: 'flex',
            flex: 1,
            margin: 0,
            color: prismTheme.plain.color,
            transition: 'color 400ms ease',
          }}>
            {name}
          </p>
        </div>
      </div>
    )}
  </PrismThemeConsumer>
)

export default FileName
