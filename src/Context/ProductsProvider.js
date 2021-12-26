import { createContext, useReducer, useContext, useLayoutEffect } from 'react'
import { get } from '../Service'

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
const actions = {
	SUCCESS_REQUEST_PRODUCTS: 'SUCCESS_REQUEST_PRODUCTS',
	FAILED_REQUEST_PRODUCTS: 'FAILED_REQUEST_PRODUCTS',
}

const initialState = {
	loading: true,
	products: null,
	isError: '',
}

const value = (dispatch) => {
	return {
		filedRequest: (payload) => dispatch({ type: actions.FAILED_REQUEST_PRODUCTS, payload }),
		successRequest: (payload) => dispatch({ type: actions.SUCCESS_REQUEST_PRODUCTS, payload }),
	}
}

const reducer = (state, action) => {
	const { type } = action
	switch (type) {
		case actions.SUCCESS_REQUEST_PRODUCTS:
			return { ...state, loading: false, products: action.payload, isError: '' }
		case actions.FAILED_REQUEST_PRODUCTS:
			return { ...state, loading: false, products: [], isError: action.payload }
		default:
			throw new Error(`type reducer invalid : ${type}`)
	}
}

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const newDispatch = value(dispatch)

	useLayoutEffect(() => {
		get('products/.json')
			.then(({ data }) => newDispatch.successRequest(data))
			.catch((e) => newDispatch.filedRequest(e))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<productsContext.Provider value={state}>
			<productsDispatch.Provider value={newDispatch}>{children}</productsDispatch.Provider>
		</productsContext.Provider>
	)
}
