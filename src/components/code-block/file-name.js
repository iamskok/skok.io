/** @jsx jsx */
import { jsx } from 'theme-ui'
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
    <div sx={{
      overflowX: `hidden`,
      border: 0,
      borderBottomWidth: 1,
      borderStyle: `solid`,
      borderColor: `primary`,
    }}>
      <div
        onScroll={ addScrollbar }
        sx={{
          overflowX: 'scroll',
          paddingTop: 1,
          '&::-webkit-scrollbar': {
            height: `scrollBar`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: scrollbar ? `primary` : `rgba(0,0,0,0)`,
          }
        }}
      >
        <p sx={{
          fontSize: 2,
          fontFamily: `code`,
          display: `flex`,
          flex: 1,
          margin: 0,
          color: `secondary`,
        }}>
          { name.trim() }
        </p>
      </div>
    </div>
  )
}

export default FileName
