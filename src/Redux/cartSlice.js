import { createSlice } from '@reduxjs/toolkit'
import { totalProducts } from '../Helper'

const initialState = {
	total: 0,
	pay: false,
	selectedItem: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		incrementProduct(state, action) {
			const id = action.payload
			const product = state.selectedItem[id]
			product.count += 1
			product.total += totalProducts(state.selectedItem)
		},
		decrementProduct(state, action) {
			const id = action.payload
			const product = state.selectedItem[id]
			product.count -= 1
			product.total += totalProducts(state.selectedItem)
		},
		addProduct: {
			reducer(state, action) {
				const product = action.payload
				state.selectedItem[product.id] = product
			},
			prepare(product) {
				return { payload: { ...product, count: 1 } }
			},
		},
		removeProduct(state, action) {
			const id = action.payload
			const products = state.selectedItem
			state.selectedItem = products.filter((product) => product.id !== id)
			state.total += totalProducts(products)
		},
		clear(state) {
			state.selectedItem = []
		},
		payOff(state) {
			state.pay = true
		},
	},
})
export const { incrementProduct, decrementProduct, addProduct, removeProduct, clear } = cartSlice.actions
export default cartSlice.reducer

export const getSelectItem = (state) => state.cart.selectedItem
