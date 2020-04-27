/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PrismThemeConsumer } from './prism-theme-provider'
import { useState } from 'react'

const FileName = ({ name }) => {
  const [scrollbar, setScrollbar] = useState(false)
  const addScrollbar = () => {
    setScrollbar(true)
    setTimeout(() => {
      setScrollbar(false)
    }, 5000)
  }

  return (
    <PrismThemeConsumer>
      {({ prismTheme }) => (
        <div sx={{
          overflowX: 'hidden',
          display: 'flex',
          flex: 1
        }}>
          <div
            onScroll={ addScrollbar }
            sx={{
              overflowX: 'scroll',
              marginLeft: 3,
              '&::-webkit-scrollbar': {
                height: `5px`,
              },
              '&::-webkit-scrollbar-thumb': {
                background: scrollbar ? prismTheme.plain.color : `rgba(0,0,0,0)`,
              }
            }}
          >
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
              { name.trim() }
            </p>
          </div>
        </div>
      )}
    </PrismThemeConsumer>
  )
}

export default FileName
