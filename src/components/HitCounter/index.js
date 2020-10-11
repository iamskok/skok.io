import React, { useState, useEffect } from "react"
import firebase from "firebase"

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
})

const db = firebase.firestore()

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useState(0)

  useEffect(() => {
    const getHits = async () => {
      try {
        db.doc(`posts/${slug}`).onSnapshot(doc => {
          const { hits: registeredHits } = doc.data()

          setHits(registeredHits)
        })

        fetch(`/.netlify/functions/register-hit?slug=${slug}`)
      } catch (error) {
        throw new Error(error)
      }
    }
    getHits()
  }, [slug])

  return <h1>HitCounter: {hits}</h1>
}

export default HitCounter
