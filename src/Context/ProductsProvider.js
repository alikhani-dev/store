import { createContext, useReducer, useContext, useLayoutEffect } from 'react'
import { getProducts } from '../Service'

const productsContext = createContext()
const productsDispatch = createContext()

export const useProductsDispatch = () => {
	const context = useContext(productsDispatch)

	if (!context) {
		throw new Error('productsDispatch must be used with a Provider')
	}

	return context
}

export const useProducts = () => {
	const context = useContext(productsContext)

	if (!context) {
		throw new Error('productsContext must be used with a Provider')
	}

	return context
}
//--- Reducer
const types = {
	SUCCESS_REQUEST_PRODUCTS: 'SUCCESS_REQUEST_PRODUCTS',
	FAILED_REQUEST_PRODUCTS: 'FAILED_REQUEST_PRODUCTS',
}

const initialState = {
	loading: true,
	products: null,
	isError: '',
}

const filedRequest = (payload) => ({ type: types.FAILED_REQUEST_PRODUCTS, payload })
const successRequest = (payload) => ({ type: types.SUCCESS_REQUEST_PRODUCTS, payload })

const reducer = (state, action) => {
	const { type } = action
	switch (type) {
		case types.SUCCESS_REQUEST_PRODUCTS:
			return { ...state, loading: false, products: action.payload, isError: '' }
		case types.FAILED_REQUEST_PRODUCTS:
			return { ...state, loading: false, products: [], isError: action.payload }
		default:
			throw new Error(`type reducer invalid : ${type}`)
	}
}

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useLayoutEffect(() => {
		getProducts()
			.then((response) => dispatch(successRequest(response)))
			.catch((error) => dispatch(filedRequest(error)))
	}, [])
	return (
		<productsContext.Provider value={state}>
			<productsDispatch.Provider value={dispatch}>{children}</productsDispatch.Provider>
		</productsContext.Provider>
	)
}
