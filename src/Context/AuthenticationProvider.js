import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { createContext, useContext, useLayoutEffect, useState } from 'react'
import { auth, db } from '../Service'

const AuthState = createContext()

export const useAuth = () => {
	const context = useContext(AuthState)
	if (!context) {
		throw new Error('authentication must be used with a Provider')
	}
	return context
}

// authorization
const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

const logOut = () => signOut(auth)

const googleSingIn = async () => {
	const googleAuthProvider = new GoogleAuthProvider()
	const data = await signInWithPopup(auth, googleAuthProvider)
	const { displayName, uid, phoneNumber } = data.user.providerData[0]
	await setDoc(doc(db, 'users', uid), { fullName: displayName, phone: phoneNumber })
	return data
}

const singUp = async ({ email, password, name, lastName, 'phone Number': phone }) => {
	const { user } = await createUserWithEmailAndPassword(auth, email, password)
	return await setDoc(doc(db, 'users', user.uid), { name, lastName, phone })
}


export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})

	useLayoutEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
		return () => unsubscribe()
	}, [])

	return (
		<AuthState.Provider value={{ googleSingIn, singUp, login, logOut, user }}>
			{children}
		</AuthState.Provider>
	)
}
