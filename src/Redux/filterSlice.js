import { createSlice } from '@reduxjs/toolkit'
import { getProductsValue } from './productSlice'

const initialState = {
	character: '',
	category: 'All',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterCharacter(state, action) {
			state.character = action.payload
		},
		filterCategory(state, action) {
			state.category = action.payload
		},
	},
})

export const { filterCharacter, filterCategory } = filterSlice.actions
export default filterSlice.reducer

export const getFilterCharacter = (state) => state.filter.character
export const getFilterCategory = (state) => state.filter.category

export const filterProduct = (state) => {
	let newProduct = getProductsValue(state)
	const character = getFilterCharacter(state)
	const category = getFilterCategory(state)

	if (character.length > 0) {
		newProduct = newProduct.filter((product) => product.name.toLowerCase().startsWith(character))
	}

	if (category !== 'All') {
		newProduct = newProduct.filter((product) => product.category === category)
	}
	return newProduct
}

export const getKeysFilterProduct = (state) => {
	let keys = []
	filterProduct(state).forEach((product) => {
		keys.push(product.id)
	})
	return keys
}
