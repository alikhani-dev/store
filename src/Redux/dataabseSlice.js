import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../Service/firebase-config'
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore'

const productsCollectionRef = collection(db, 'products')
const categoryCollectionRef = collection(db, 'category')

export const getProducts = createAsyncThunk('auth/getProducts', async (params, thunkApi) => {
	const data = await getDocs(productsCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
})

export const getCategory = createAsyncThunk('auth/getCategory', async (params, thunkApi) => {
	const data = await getDocs(categoryCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
})

export const creatProduct = createAsyncThunk('auth/creatProduct', async ({ fields }, thunkApi) => {
	await addDoc(productsCollectionRef, fields)
})

export const updateProductUser = createAsyncThunk('auth/updateProductUser', async ({ fields }, thunkApi) => {
	const user = doc(db, 'users', uid)
	await setDoc(user, { product }, { merge: true })
})

const initialState = {}

const databaseSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.fulfilled, (state, action) => {})
			.addCase(getProducts.rejected, (state, action) => {})
			.addCase(getProducts.pending, (state, action) => {})
	},
})

export default databaseSlice.reducer
