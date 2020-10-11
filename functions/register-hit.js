const firebase = require("firebase")

// Get `production` and `development` environment variables from Netlify.
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

// Set configuration based on the Netlify environment.
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

// Check if Firebase wasn't previously initialized.
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

const initialPostDoc = {
  hits: 1,
}

exports.handler = async event => {
  const { slug } = event.queryStringParameters
  const collectionName = `posts`

  const postRef = db.collection(collectionName).doc(slug)
  let postDoc = await postRef.get()

  const isPostDocExists = postDoc.exists

  if (isPostDocExists) {
    const increment = firebase.firestore.FieldValue.increment(1)
    await postRef.update({ hits: increment })
  } else {
    // Create post document if it didn't exist.
    await postRef.set(initialPostDoc)
    // Update post doc value
    postDoc = await postRef.get()
  }

  const { hits: registeredHits } = postDoc.data()

  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: registeredHits,
    }),
  }
}
