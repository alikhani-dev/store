import { createSlice } from '@reduxjs/toolkit'
import { totalProducts } from '../Helper'

const initialState = {
	total: 0,
	pay: false,
	selectedItem: {},
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		incrementProduct(state, action) {
			const id = action.payload
			state.selectedItem[id].count += 1
			state.total = totalProducts(state.selectedItem)
		},
		decrementProduct(state, action) {
			const id = action.payload
			state.selectedItem[id].count -= 1
			state.total = totalProducts(state.selectedItem)
		},
		addProduct: {
			reducer(state, action) {
				const product = action.payload
				state.selectedItem[product.id] = product
				state.total = totalProducts(state.selectedItem)
			},
			prepare(product) {
				return { payload: { ...product, count: 1 } }
			},
		},
		removeProduct(state, action) {
			delete state.selectedItem[action.payload]
			state.total = totalProducts(state.selectedItem)
		},
		clearProduct(state) {
			state.selectedItem = []
		},
		payOff(state) {
			state.pay = true
		},
	},
})
export const { incrementProduct, decrementProduct, addProduct, removeProduct, clearProduct } = cartSlice.actions
export default cartSlice.reducer

export const getSelectItem = (state) => state.cart.selectedItem
export const getSelectItemKeys = (state) => Object.keys(state.cart.selectedItem)
export const getSelectItemValues = (state) => Object.values(state.cart.selectedItem)
export const getTotal = (state) => state.cart.total
