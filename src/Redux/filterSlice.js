import { createSlice } from '@reduxjs/toolkit'

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
	let { products } = state.products
	const character = getFilterCharacter(state)
	const category = getFilterCategory(state)

	if (character.length > 0) {
		products = products.filter((product) => product.name.toLowerCase().startsWith(character))
	}

	if (category !== 'All') {
		products = products.filter((product) => product.category === category)
	}

	return products
}
