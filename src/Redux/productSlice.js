import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts as requestProduct } from '../Service'

const initialState = {
	status: 'idle',
	products: [],
	isError: '',
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await requestProduct()
		if (response.length > 0) {
			return response
		}
	} catch (e) {
		throw new Error(e)
	}
})

const productSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.status = 'success'
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isError = action.payload
				state.status = 'idle'
			})
			.addCase(fetchProducts.pending, (state) => {
				state.status = 'pending'
			})
	},
})

export default productSlice.reducer

export const getProducts = (state) => state.products.products
export const getStatus = (state) => state.products.status
export const getError = (state) => state.products.isError
