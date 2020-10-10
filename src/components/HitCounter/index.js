import React, { useState, useEffect } from "react"
import firebase from "firebase"

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useState(0)

  return <h1>HitCounter: {hits}</h1>
}

export default HitCounter
