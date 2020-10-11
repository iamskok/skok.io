const firebase = require("firebase")

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

const config = process.env.NETLIFY_DEV
  ? {
      apiKey: FIREBASE_API_KEY_DEV,
      authDomain: FIREBASE_AUTH_DOMAIN_DEV,
      databaseURL: FIREBASE_DATABASE_URL_DEV,
      projectId: FIREBASE_PROJECT_ID_DEV,
    }
  : {
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

  const postRef = db.collection(`posts`).doc(slug)
  const postSnapshot = await postRef.get()

  if (postSnapshot.exists) {
    const increment = firebase.firestore.FieldValue.increment(1)
    postRef.update({ hits: increment })
  } else {
    postRef.set({
      hits: 1,
    })
  }

  const { hits: registeredHits } = (await postRef.get()).data()

  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: registeredHits,
    }),
  }
}
