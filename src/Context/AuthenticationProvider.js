import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useLayoutEffect, useState } from 'react'
import { googleSingIn, singUp, login, logOut, auth, updateProductUser } from '../Service'

const AuthState = createContext()

export const useAuth = () => {
	const context = useContext(AuthState)
	if (!context) {
		throw new Error('authentication must be used with a Provider')
	}
	return context
}

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})

	useLayoutEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
		return () => unsubscribe()
	}, [])

	return (
		<AuthState.Provider value={{ googleSingIn, singUp, login, logOut, updateProductUser, user }}>
			{children}
		</AuthState.Provider>
	)
}
