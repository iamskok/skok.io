/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'

const FileName = ({ name }) => (
  <PrismThemeConsumer>
    {({ prismTheme }) => (
      <div sx={{
        overflowX: 'hidden',
        display: 'flex',
        flex: 1
      }}>
        <div sx={{
          overflowX: 'scroll',
          backgroundColor: prismTheme.plain.backgroundColor,
          transition: 'background-color 400ms ease',
          padding: 1
        }}>
          <p sx={{
            fontSize: 4,
            lineHeight: 1.5,
            fontFamily: 'heading',
            fontWeight: 'bold',
            fontStyle: 'italic',
            display: 'flex',
            flex: 1,
            margin: 0,
            color: prismTheme.plain.color,
            transition: 'color 400ms ease',
          }}>
            {name.trim()}
          </p>
        </div>
      </div>
    )}
  </PrismThemeConsumer>
)

export default FileName
