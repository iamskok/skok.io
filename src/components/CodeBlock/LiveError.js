import React from "react"
import { LiveContext } from "react-live"
import Pre from "../Pre"

const LiveError = props => (
  <LiveContext.Consumer>
    {({ error }) =>
      error ? (
        <Pre {...props} isLiveError={!!error}>
          {error}
        </Pre>
      ) : null
    }
  </LiveContext.Consumer>
)

export default LiveError