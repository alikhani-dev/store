import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts as requestProduct } from '../Service'

const initialState = {
	status: 'idle',
	products: {},
	isError: '',
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	const response = await requestProduct()
	if (response.length > 0) {
		return response
	}
})

const productSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: {
		[fetchProducts.fulfilled]: (state, action) => {
			const newProducts = {}
			action.payload.forEach((product) => {
				newProducts[product.id] = product
			})

			state.products = newProducts
			state.status = 'success'
		},
		[fetchProducts.rejected]: (state, action) => {
			state.isError = action.payload
			state.status = 'idle'
		},
		[fetchProducts.pending]: (state) => {
			state.status = 'pending'
		},
	},
})

export default productSlice.reducer

export const getProducts = (state) => state.products.products
export const getStatus = (state) => state.products.status
export const getError = (state) => state.products.isError
export const getProductByID = (id) => (state) => state.products.products[id]
export const getProductsValue = (state) => Object.values(getProducts(state))
