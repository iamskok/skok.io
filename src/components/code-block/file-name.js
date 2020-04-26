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
          marginLeft: 3
        }}>
          <p sx={{
            fontSize: 4,
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
