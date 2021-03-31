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

// if(location.hostname === 'localhost'){
//     config = {

//     }
// }


  
export default function initFirebase(){
    !firebase.apps.length && firebase.initializeApp(config)
}

// export function database(){ 
//     const dev = process.env.NODE_ENV === 'development'
//     return db
// }

export const dev = process.env.NODE_ENV === 'development'
