import React, { useState, useEffect } from "react"
import firebase from "firebase"

const FIREBASE_API_KEY = ``
const FIREBASE_AUTH_DOMAIN = ``
const FIREBASE_DATABASE_URL = ``
const FIREBASE_PROJECT_ID = ``

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
}

firebase.initializeApp(config)

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

  return <h1>HitCounter: {hits > 1 ? hits : null}</h1>
}

export default HitCounter
