/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import EyeIcon from "../../assets/icons/eye.inline.svg"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  // Temporary fix. Netlify is not picking up this variable.
  projectId: process.env.FIREBASE_PROJECT_ID,
  // ? process.env.FIREBASE_PROJECT_ID
  // : `iamskok`,
}

firebase.initializeApp(config)

const db = firebase.firestore()

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useState(null)
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    let unsubscribeFromPostUpdates

    const getHits = async () => {
      try {
        // Increment hits and fetch current value.
        fetch(`/.netlify/functions/register-hit?slug=${slug}`).then(() => {
          let blinkTimer
          let blinkCounter = 0

          const postRef = db.collection(`posts`).doc(slug)

          // Subscribe on real-time hit updates.
          unsubscribeFromPostUpdates = postRef.onSnapshot(doc => {
            const { hits: registeredHits } = doc.data()

            // Don't blink on initial render.
            if (blinkCounter) {
              setBlink(true)
            }

            blinkCounter++

            setHits(registeredHits)

            if (blinkTimer) {
              clearTimeout(blinkTimer)
              blinkTimer = null
            }

            blinkTimer = setTimeout(() => {
              setBlink(false)
              blinkTimer = null
            }, 400)
          })
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    getHits()

    return () => unsubscribeFromPostUpdates()
  }, [slug])

  return hits !== null ? (
    <Flex
      sx={{
        fontSize: 2,
        flexDirection: `row`,
        alignItems: `center`,
        backgroundColor: blink ? `primary` : `transparent`,
        transition: `background-color 400ms ease`,
        borderRadius: 1,
      }}
    >
      <EyeIcon
        sx={{
          width: `icon`,
          heught: `icon`,
          fill: `text`,
          marginX: 2,
        }}
      />
      <div sx={{ marginX: 2 }}>{hits}</div>
    </Flex>
  ) : (
    <Fragment></Fragment>
  )
}

export default HitCounter
