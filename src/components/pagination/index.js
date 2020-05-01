/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Link from './link'
import { baseThemeSettings } from '../../gatsby-plugin-theme-ui/index'

const { rythm } = baseThemeSettings

const Pagination = ({ next, previous }) => (
  <Flex sx={{
    justifyContent: `space-between`,
    marginBottom: rythm
  }}>
    { previous &&
      <Link 
        to={ previous }
        text="Previous"
      />
    }

    { next &&
      <Link
        to={ next }
        text="Next"
      />
    }
  </Flex>
)

export default Pagination