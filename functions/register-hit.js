const firebase = require("firebase")
const path = require("path")

require("dotenv").config({ path: `${path.resolve()}/.env` })

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
} = process.env

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

exports.handler = async event => {
  const { slug } = event.queryStringParameters

  const postRef = db.doc(`posts/${slug}`)
  const increment = firebase.firestore.FieldValue.increment(1)
  postRef.update({ hits: increment })

  const { hits: registeredHits } = (await db.doc(`posts/${slug}`).get()).data()

  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: registeredHits,
    }),
  }
}
