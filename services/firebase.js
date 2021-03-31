import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/analytics"
import 'firebase/firestore'

let config = {    
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
}

!firebase.apps.length && firebase.initializeApp(config)

const db = firebase.firestore();
const auth = firebase.auth;

// eslint-disable-next-line no-restricted-globals
if (process.env.NODE_ENV === 'development') {
  db.useEmulator('localhost', 8080);
  auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
}

export default firebase;
export { db, auth };