/** @jsx jsx */
import { jsx } from 'theme-ui'
import { LiveContext } from 'react-live'
import Pre from '../pre'

const LiveError = props => (
  <LiveContext.Consumer>
    {({ error }) => (
      error ?
      <Pre
        {...props}
        isLiveError={!!error}
      >
        {error}
      </Pre> :
      null
    )}
  </LiveContext.Consumer>
)

export default LiveError