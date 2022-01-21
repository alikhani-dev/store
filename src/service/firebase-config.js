import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_DATA_BASE_URL,
	storageBucket: process.env.REACT_APP_PROJECT_ID,
	messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
	appId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	measurementId: process.env.REACT_APP_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
