/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import useLocalStorage from "../../hooks/useLocalStorage"
import EyeIcon from "../../assets/icons/eye.inline.svg"

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_API_KEY_DEV,
  FIREBASE_AUTH_DOMAIN_DEV,
  FIREBASE_DATABASE_URL_DEV,
  FIREBASE_PROJECT_ID_DEV,
} = process.env

// eslint-disable-next-line no-console
console.table({
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_API_KEY_DEV,
  FIREBASE_AUTH_DOMAIN_DEV,
  FIREBASE_DATABASE_URL_DEV,
  FIREBASE_PROJECT_ID_DEV,
})

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  // Temporary fix. Netlify is not picking up this variable.
  projectId: FIREBASE_PROJECT_ID,
  // ? process.env.FIREBASE_PROJECT_ID
  // : `iamskok`,
}

const REGISTERED_HIT_ENDPOINT = `/.netlify/functions/register-hit`

firebase.initializeApp(config)

const db = firebase.firestore()

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useLocalStorage(`registered-hit-${slug}`, () => null)
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    let unsubscribeFromPostUpdates

    const getHits = async () => {
      try {
        // Increment hits and fetch current value.
        fetch(`${REGISTERED_HIT_ENDPOINT}?slug=${slug}`).then(() => {
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
  }, [slug, setHits])

  return hits !== null ? (
    <Flex
      sx={{
        fontSize: 2,
        flexDirection: `row`,
        alignItems: `center`,
        backgroundColor: blink ? `primary` : `transparent`,
        transition: `hitCounter`,
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
