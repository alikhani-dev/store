import { createSlice } from '@reduxjs/toolkit'
import { compareLower, compareUpper } from '../Helper'
import { getProductsValue } from './productSlice'

export const typeSort = {
	MAX: 'max Price',
	MIN: 'min Price ',
	UPPERCASE: 'z-a',
	LOWERCASE: 'a-z',
	RANDOM: 'random',
}
export const typeCategory = {
	ALL: 'ALL',
	CAR: 'CAR',
	DIGITAL: 'DIGITAL',
	GLASSES: 'GLASSES',
}

const initialState = {
	character: '',
	category: typeCategory.ALL,
	sortBy: typeSort.RANDOM,
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
		filterSortBy(state, action) {
			state.sortBy = action.payload
		},
	},
})

export const { filterCharacter, filterCategory, filterSortBy } = filterSlice.actions
export default filterSlice.reducer

export const getFilterCharacter = (state) => state.filter.character
export const getFilterCategory = (state) => state.filter.category
export const getFilterSortBy = (state) => state.filter.sortBy

const sortProduct = (state, product) => {
	const sort = getFilterSortBy(state)

	switch (sort) {
		case typeSort.MAX: {
			return product.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
		}
		case typeSort.MIN: {
			return product.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
		}
		case typeSort.LOWERCASE: {
			return product.sort(compareLower)
		}
		case typeSort.UPPERCASE: {
			return product.sort(compareUpper)
		}
		default:
			return product
	}
}

const filterCategoryProduct = (state, products) => {
	const category = getFilterCategory(state)

	if (category !== typeCategory.ALL) {
		return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
	}

	return products
}

const filterCharacterProduct = (state, products) => {
	const character = getFilterCharacter(state)

	if (character.length > 0) {
		return products.filter((product) => product.name.toLowerCase().startsWith(character))
	}

	return products
}

export const filterProduct = (state) => {
	let product = getProductsValue(state)
	const character = filterCharacterProduct(state, product)
	const category = filterCategoryProduct(state, character)
	const sortBy = sortProduct(state, category)
	return sortBy
}

export const getKeysFilterProduct = (state) => {
	let keys = []
	filterProduct(state).forEach((product) => {
		keys.push(product.id)
	})
	return keys
}
