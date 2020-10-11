import React, { useState, useEffect } from "react"
import firebase from "firebase"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
}

firebase.initializeApp(config)

const db = firebase.firestore()

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useState(null)

  useEffect(() => {
    let unsubscribeFromPostUpdates

    const getHits = async () => {
      try {
        const postRef = db.collection(`posts`).doc(slug)
        const postDoc = await postRef.get()
        const isPostDocExists = postDoc.exists

        // Subscribe on real-time hit updates.
        const subscribeOnPostUpdates = postRef => {
          return postRef.onSnapshot(doc => {
            const { hits: registeredHits } = doc.data()

            setHits(registeredHits)
          })
        }

        if (isPostDocExists) {
          unsubscribeFromPostUpdates = subscribeOnPostUpdates(postRef)
        }

        // Increment hits and fetch current value.
        fetch(`/.netlify/functions/register-hit?slug=${slug}`).then(() => {
          if (!isPostDocExists) {
            unsubscribeFromPostUpdates = subscribeOnPostUpdates(postRef)
          }
        })
      } catch (error) {
        throw new Error(error)
      }
    }

    getHits()

    return () => unsubscribeFromPostUpdates()
  }, [slug])

  return hits === null ? <h1>HitCounter: {hits}</h1> : <></>
}

export default HitCounter
