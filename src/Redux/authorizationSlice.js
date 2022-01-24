import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { onAuthStateChanged } from 'firebase/auth'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { useState } from 'react'
import { db, auth } from '../Service/firebase-config'

export const singUp = createAsyncThunk('auth/singUp', async (params, thunkApi) => {
	const { email, password, name, lastName, 'phone Number': phone } = params
	const { user } = await createUserWithEmailAndPassword(auth, email, password)
	thunkApi.dispatch(sendInfoUser(user.uid, name, lastName, phone))
})

export const sendInfoUser = createAsyncThunk('auth/sendInfoUser', async (params) => {
	const { name, lastName, phone, uid } = params
	return await setDoc(doc(db, 'users', uid), { name, lastName, phone })
})

export const googleSingIn = createAsyncThunk('auth/googleSingIn', async (_, thunkApi) => {
	const googleAuthProvider = new GoogleAuthProvider()
	const data = await signInWithPopup(auth, googleAuthProvider)
	const { displayName, uid, phoneNumber } = data.user.providerData[0]
	thunkApi.dispatch(getUserGoogleInfo({ displayName, uid, phoneNumber }))
})

export const getUserGoogleInfo = createAsyncThunk('auth/getUserGoogleInfo', async ({ user }) => {
	const { displayName, uid, phoneNumber } = user
	return await setDoc(doc(db, 'users', uid), { fullName: displayName, phone: phoneNumber })
})

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
	signInWithEmailAndPassword(auth, email, password)
})

export const logOut = createAsyncThunk('auth/logOut', async () => {
	signOut(auth)
})

// TODO
export const handelOnAuthStateChanged = createAsyncThunk('auth/onAuthStateChanged', async () => {
	const [user, setUser] = useState()
	const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
	return () => unsubscribe()
})

const initialState = {
	user: {},
}

const authorizationSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(googleSingIn.fulfilled, () => {})
	},
})

export default authorizationSlice.reducer

export const getUser = (state) => state.user
