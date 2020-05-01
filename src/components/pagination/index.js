/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Link from './link'
import { baseThemeSettings } from '../../theme'

const { rythm } = baseThemeSettings

const Pagination = ({ next, previous }) => (
  <Flex sx={{
    justifyContent: `space-between`,
    marginBottom: rythm
  }}>
    <Flex sx={{
      flex: 1
    }}>
      { previous &&
        <Link
          to={previous}
          text="Previous"
        />
      }
    </Flex>

    <Flex sx={{
      flex: 1,
      flexDirection: `row-reverse`
    }}>
      { next &&
        <Link
          to={ next }
          text="Next"
        />
      }
    </Flex>
  </Flex>
)

export default Pagination