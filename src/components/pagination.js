/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Link from '../components/link'
import { baseThemeSettings } from '../gatsby-plugin-theme-ui/index'
import { useState } from 'react'

const { rythm } = baseThemeSettings

const Pagination = ({ next, previous }) => {
  const [touchStart, setTouchStart] = useState(false)
  const addColor = () => setTouchStart(true)
  const removeColor = () => setTouchStart(false)

  return (
    <Flex sx={{
      justifyContent: `space-between`,
      marginBottom: rythm
    }}>
      { previous &&
        <Link
          to={ previous }
          onTouchStart={ addColor }
          onTouchEnd={ removeColor }
          sx={{
            fontSize: 4,
            fontWeight: `bold`,
            color: touchStart ? `secondary` : `text`,
            textDecoration: `none`,
            '&:focus': {
              color: `secondary`
            }
          }}
        >
          Previous
        </Link>
      }

      { next &&
        <Link
          to={ next }
          onTouchStart={ addColor }
          onTouchEnd={ removeColor }
          sx={{
            fontSize: 4,
            fontWeight: `bold`,
            color: touchStart ? `secondary` : `text`,
            textDecoration: `none`,
            '&:focus': {
              color: `secondary`
            }
          }}
        >
          Next
        </Link>
      }
    </Flex>
  )
}

export default Pagination