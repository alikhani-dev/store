import { createContext, useReducer, useContext } from 'react'

const FilterContext = createContext()
const FilterDispatch = createContext()

export const useFilter = () => {
	const context = useContext(FilterContext)

	if (!context) {
		throw new Error('useFilter must be used with a Provider')
	}

	return context
}

export const useFilterDispatch = () => {
	const context = useContext(FilterDispatch)

	if (!context) {
		throw new Error('FilterDispatch must be used with a Provider')
	}

	return context
}

export const categoryList = ['all', 'car', 'mugs', 'toys', 'glasses', 'digital']
export const sortList = ['lowest', 'highest', 'ascending', 'descending']

const types = {
	SET_SEARCH: 'SET_SEARCH',
	SET_CATEGORY: 'SET_CATEGORY',
	SET_SORT: 'SET_SORT',
}

const initialState = {
	sort: 'ascending',
	category: 'all',
	search: '',
}

const reducer = (state, action) => {
	switch (action.type) {
		case types.SET_CATEGORY:
			return { ...state, category: action.payload }

		case types.SET_SEARCH:
			return { ...state, search: action.payload }

		case types.SET_SORT:
			return { ...state, sort: action.payload }

		default:
			throw new Error(`Unknown action type : ${action.type}`)
	}
}

// Action reducer
export const setCategory = (payload) => ({ type: types.SET_CATEGORY, payload })
export const setSearch = (payload) => ({ type: types.SET_SEARCH, payload })
export const setSort = (payload) => ({ type: types.SET_SORT, payload })

const filterProduct = (products, category) => {
	if (category === 'all') {
		return products
	}

	return products.filter((product) => product.category === category)
}

const sortProduct = (products, sort) => {
	switch (sort) {
		case 'lowest':
			return products.sort((a, b) => a.price - b.price)
		case 'highest':
			return products.sort((a, b) => b.price - a.price)
		case 'ascending':
			return products.sort((a, b) => a.name.localeCompare(b.name))
		case 'descending':
			return products.sort((a, b) => b.name.localeCompare(a.name))
		default:
			throw new Error(`Unknown sort type : ${sort}`)
	}
}

const filterSearch = (products, search) => {
	if (search === '') {
		return products
	}

	return products.filter((product) => product.name.toLowerCase().includes(search))
}

export const combineFilters = (products, category, search, sort) => {
	const filteredProduct = filterProduct(products, category)
	const sortedProduct = sortProduct(filteredProduct, sort)
	const searchedProduct = filterSearch(sortedProduct, search)

	return searchedProduct
}

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<FilterContext.Provider value={state}>
			<FilterDispatch.Provider value={dispatch}>{children}</FilterDispatch.Provider>
		</FilterContext.Provider>
	)
}
